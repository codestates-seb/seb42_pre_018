package com.galmaegi.question.service;

import com.galmaegi.exception.BusinessLogicException;
import com.galmaegi.exception.ExceptionCode;
import com.galmaegi.question.entity.Question;
import com.galmaegi.question.repository.QuestionRepository;
import com.galmaegi.user.domain.UserInfo;
import com.galmaegi.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final UserService userService;
    private final QuestionRepository questionRepository;

    public QuestionService(UserService userService, QuestionRepository questionRepository) {
        this.userService = userService;
        this.questionRepository = questionRepository;
    }


    public Question createQuestion(Question question){
        verifyExistsTitle(question.getTitle());

        return questionRepository.save(question);
    }

    public  Question findQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId); //요청된 질문이 DB에 없으면 에러

        findQuestion.setView(findQuestion.getView()+1); //view 1증가
        questionRepository.save(findQuestion); // 수정후 DB에 저장

        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size,String sort){//전체 question에 pagenation과 sort 구현

        Page<Question> findAllQuestion = questionRepository.findAllByQuestionStatus( //삭제된 글 빼고 전체 질문글 가져옴
                PageRequest.of(page,size,Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);


        VerifiedNoQuestion(findAllQuestion);//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생

        return findAllQuestion;

    }
    public UserInfo findQuestionUser(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId); //요청된 질문이 DB에 없으면 에러
        return findQuestion.getUser();
    }

    public Page<Question> searchQuestions(String keyWord,int page, int size,String sort){//전체 question에 pagenation과 sort 구현

        PageRequest pageRequest =PageRequest.of(page,size,Sort.by(sort).descending());
        List<Question> searchResult = questionRepository.searchQuestionsByKeyWord( //삭제된 글 빼고 전체 질문글 가져옴
                keyWord);

        int start = (int)pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), searchResult.size());
        Page<Question> questions = new PageImpl<>(searchResult.subList(start, end), pageRequest, searchResult.size());


        VerifiedNoQuestion(questions);//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생

        return questions;


//        Page<Question> searchResult = questionRepository.searchQuestionsByKeyWord( //삭제된 글 빼고 전체 질문글 가져옴
//                PageRequest.of(page,size,Sort.by(sort).descending()),
//                keyWord);
//
//
//        VerifiedNoQuestion(searchResult);//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생
//
//        return searchResult;

    }
    public Question voteQuestion(long questionId,int vote){ //추천수 바꿔주는 메소드
        Question findQuestion = findVerifiedQuestion(questionId);//요청된 질문이 DB에 없으면 에러
        findQuestion.setVote(vote);
        Question updatedQuestion =questionRepository.save(findQuestion);
        updatedQuestion.setQuestionTags(questionTagService.findVerifiedQuestionTags(updatedQuestion)); //해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시
        return updatedQuestion;
    }

    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());//요청된 질문이 DB에 없으면 에러

        Optional.ofNullable(question.getUpdatedAt()) //업데이트 날짜 수정
                .ifPresent(questionUpdatedAt->findQuestion.setUpdatedAt(questionUpdatedAt));

        Optional.ofNullable(question.getTitle()) //제목수정
                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));

        Optional.ofNullable(question.getBody()) //내용수정
                .ifPresent(questionBody->findQuestion.setBody(questionBody));


        Optional.ofNullable(question.getQuestionStatus()) //글 삭제
                .ifPresent(questionStatus->findQuestion.setQuestionStatus(questionStatus));

        System.out.println("출력! ->"+findQuestion.getQuestionId());
        System.out.println("출력! ->" +findQuestion.getQuestionTags().stream().map(questionTag -> questionTag.getQuestion().getQuestionId()).
                collect(Collectors.toList()));

        Question updatedQuestion = questionRepository.save(findQuestion);

        if(!question.getQuestionTags().isEmpty()){//태그 수정 (태그 DB업데이트)
            questionTagService.deleteQuestionTags(question); //기존 태그 삭제(QUESTIONS_TAG_NOT_EXIST)됌

            questionTagService.createQuestionTags(question.getQuestionTags()); //새 태그로 갱신
        }
        updatedQuestion.setQuestionTags(questionTagService.findVerifiedQuestionTags(updatedQuestion));//해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시
        return updatedQuestion;
    }

    private void VerifiedNoQuestion(Page<Question> findAllQuestion){//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생
        if(findAllQuestion.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }

    public Question findVerifiedQuestion(long questionId){ //요청된 질문이 DB에 없으면 에러
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


    private void verifyExistsTitle(String title) {//이미 글이 존재하면 에러
        Optional<Question> question = questionRepository.findByTitle(title);
        if (question.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }

}
