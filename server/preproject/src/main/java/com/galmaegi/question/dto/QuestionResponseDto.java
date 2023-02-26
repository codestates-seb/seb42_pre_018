package com.galmaegi.question.dto;

import com.galmaegi.answer.dto.AnswerResponseDto;
import com.galmaegi.question.entity.Question;
import com.galmaegi.user.dto.UserResponseDto;
import com.galmaegi.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int vote;
    private int view;
    private UserResponseDto user;
    private List<com.galmaegi.question.dto.QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
