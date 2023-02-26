package com.galmaegi.question.controller;

import com.galmaegi.answer.mapper.AnswerMapper;
import com.galmaegi.answer.service.AnswerService;
import com.galmaegi.question.dto.QuestionPatchDto;
import com.galmaegi.question.dto.QuestionPostDto;
import com.galmaegi.question.dto.QuestionVoteDto;
import com.galmaegi.question.entity.Question;
import com.galmaegi.question.mapper.QuestionMapper;
import com.galmaegi.question.service.QuestionService;
import com.galmaegi.response.MultiResponseDto;
import com.galmaegi.response.SingleResponseDto;
import com.galmaegi.user.mapper.UserMapper;
import com.galmaegi.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/v1")
@Validated
@Slf4j
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;
    private final UserMapper userMapper;
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;
    private final QuestionTagService questionTagService;



    /**
     * 질문 작성 API
     * **/
    @PostMapping("/user/question/write")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(
                mapper.questionPostDtoToQuestion(userService,questionPostDto));


        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(userMapper,question)), HttpStatus.CREATED);
    }

    /**
     *
     * 전체 질문페이지 이동 API
     * **/
    @GetMapping("/question")
    public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size,
                                       @RequestParam("sort") String sort){

        Page<Question> pageQuestions = questionService.findQuestions(page-1,size,sort);

        List<Question> questions = pageQuestions.getContent();
        questions.stream().forEach(question -> question.setQuestionTags(questionTagService.findVerifiedQuestionTags(question))); //해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시

        return new ResponseEntity<>(new MultiResponseDto<>(
                mapper.questionsToQuestionResponseDtos(questions),
                pageQuestions),HttpStatus.OK);

    }

    /**
     * 선택 질문페이지 이동 API(뷰 증가)
     * **/
    @GetMapping("/question/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId,
                                      @Positive @RequestParam("page") int answerPage,
                                      @Positive @RequestParam("size") int answerSize,
                                      @RequestParam("sort") String answerSort){
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(
                mapper.questionToQuestionAndAnswerResponseDto(answerService,answerMapper,userMapper,question,
                        answerPage,answerSize,answerSort)),
                HttpStatus.OK);
    }


    /**
     *본인 질문 글 수정 API
     * 자기가 작성한 글만 수정,삭제 가능
     * 자기 질문 아닌데 접근?->Access Denied User 예외 발생
     * **/
    @PatchMapping("/user/question/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto){

        questionPatchDto.setQuestionId(questionId);
        Question question = mapper.questionPatchDtoToQuestion(questionService,userService,questionPatchDto);
        Question updatedQuestion = questionService.updateQuestion(question);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(userMapper,updatedQuestion)),
                HttpStatus.OK);
    }
    /**
     * 질문글 추천 or 비추천
     * **/
    @PatchMapping("/question/vote/{question-id}")
    public ResponseEntity voteQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                        @Valid @RequestBody QuestionVoteDto questionVoteDto){

        Question votedQuestion = questionService.voteQuestion(questionId,questionVoteDto.getVote());

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(userMapper,votedQuestion)),
                HttpStatus.OK);
    }

    /**
     *질문글 검색 API
     *
     * **/
    @GetMapping("/question/search")
    public ResponseEntity getQuestions(@RequestParam("search") String keyWord,
                                       @Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size,
                                       @RequestParam("sort") String sort){


        Page<Question> searchResult = questionService.searchQuestions(keyWord,page-1,size,sort);

        List<Question> questions = searchResult.getContent();
        questions.stream().forEach(question -> question.setQuestionTags(questionTagService.findVerifiedQuestionTags(question))); //해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시

        return new ResponseEntity<>(new MultiResponseDto<>(
                mapper.questionsToQuestionResponseDtos(questions),
                searchResult),HttpStatus.OK);

    }




}
