package com.galmaegi.question.dto;

import com.galmaegi.answer.dto.AnswerResponseDto;
import com.galmaegi.question.entity.Question;
import be.response.MultiResponseDto;
import com.galmaegi.user.dto.UserResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionAndAnswerResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int vote;
    private int view;
    private UserResponseDto user;
    private MultiResponseDto<AnswerResponseDto> answers;
    private List<be.question.dto.QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
