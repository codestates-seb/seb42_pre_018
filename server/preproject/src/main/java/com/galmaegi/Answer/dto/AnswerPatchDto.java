package com.galmaegi.answer.dto;

import com.galmaegi.answer.entity.Answer;
import com.galmaegi.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

@Getter
public class AnswerPatchDto {
    @Setter
    private long answerId;

    //답 수정
    private String body;

    //답 삭제
    private Answer.AnswerStatus answerStatus;
}
