package com.galmaegi.answer.controller;

import com.galmaegi.answer.dto.AnswerPatchDto;
import com.galmaegi.answer.dto.AnswerPostDto;
import com.galmaegi.answer.dto.AnswerVoteDto;
import com.galmaegi.answer.entity.Answer;
import com.galmaegi.answer.mapper.AnswerMapper;
import com.galmaegi.answer.service.AnswerService;
import com.galmaegi.question.dto.QuestionPatchDto;
import com.galmaegi.question.dto.QuestionPostDto;
import com.galmaegi.question.dto.QuestionVoteDto;
import com.galmaegi.question.entity.Question;
import com.galmaegi.question.service.QuestionService;
import com.galmaegi.response.SingleResponseDto;
import com.galmaegi.user.mapper.UserMapper;
import com.galmaegi.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1")
@Validated
@Slf4j
@AllArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper mapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;


    /**
     * 답변 작성 API
     * **/
    @PostMapping("/user/answer/write")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService,userService,answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }
    /**
     * 본인 답변 수정
     * 자기가 작성한 답만 수정,삭제 가능
     * 자기 답 아닌데 접근?-> Access Denied User 예외 발생
     * **/
    @PatchMapping("/user/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                        @Valid @RequestBody AnswerPatchDto answerPatchDto){

        answerPatchDto.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(userMapper,updatedAnswer)),
                HttpStatus.OK);
    }

    /**
     * 답글 추천 or 비추천
     * **/
    @PatchMapping("/answer/vote/{answer-id}")
    public ResponseEntity voteAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                       @Valid @RequestBody AnswerVoteDto answerVoteDto){

        Answer votedAnswer = answerService.voteAnswer(answerId,answerVoteDto.getVote());

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(userMapper,votedAnswer)),
                HttpStatus.OK);
    }


}
