package com.galmaegi.answer.dto;

import com.galmaegi.answer.entity.Answer;
import com.galmaegi.user.dto.UserResponseDto;
import com.galmaegi.user.domain.UserInfo;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private Answer.AnswerStatus answerStatus;
    private String body;
    private int vote;
    private UserResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
