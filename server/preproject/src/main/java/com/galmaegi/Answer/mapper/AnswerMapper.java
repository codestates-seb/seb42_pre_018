package com.galmaegi.answer.mapper;

import com.galmaegi.answer.dto.AnswerPatchDto;
import com.galmaegi.answer.dto.AnswerPostDto;
import com.galmaegi.answer.dto.AnswerResponseDto;
import com.galmaegi.answer.entity.Answer;
import com.galmaegi.answer.service.AnswerService;
import com.galmaegi.exception.BusinessLogicException;
import com.galmaegi.exception.ExceptionCode;
import com.galmaegi.question.service.QuestionService;
import com.galmaegi.user.domain.UserInfo;
import com.galmaegi.user.mapper.UserMapper;
import com.galmaegi.user.service.UserService;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {

    default  Answer answerPostDtoToAnswer(QuestionService questionService, UserService userService, AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        answer.setBody(answerPostDto.getBody());
        answer.setVote(0);
        answer.setQuestion(questionService.findVerifiedQuestion(answerPostDto.getQuestionId()));
        // 현재 로그인한 토큰으로 유저정보 불러옴
        answer.setUser(userService.getLoginUser());

        return answer;
    }
    default Answer answerPatchDtoToAnswer(AnswerService answerService,UserService userService, AnswerPatchDto answerPatchDto) {
        if (userService.getLoginUser().getUserId() != answerService.findAnswerUser(answerPatchDto.getAnswerId()).getUserId()) { //해당 유저가 쓴 답 글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setBody(answerPatchDto.getBody());
        answer.setAnswerStatus(answerPatchDto.getAnswerStatus());

        return answer;
    }
    default AnswerResponseDto answerToAnswerResponseDto(UserMapper userMapper, Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setAnswerStatus(answer.getAnswerStatus());
        answerResponseDto.setBody(answer.getBody());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());

        UserInfo user = answer.getUser();
        answerResponseDto.setUser(userMapper.userToUserResponseDto(user));
        answerResponseDto.setVote(answer.getVote());
        answerResponseDto.setUpdatedAt(answer.getUpdatedAt());

        return answerResponseDto;
    }
//    default List<AnswerResponseDto> answersToAnswerResponseDtos(UserMapper userMapper,List<Answer> answers){
//
//        List<AnswerResponseDto> answerResponseDtos =answers.stream().map(answer -> answerToAnswerResponseDto(userMapper,answer)).collect(Collectors.toList());
//
//
//        return answerResponseDtos;
//    };
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
