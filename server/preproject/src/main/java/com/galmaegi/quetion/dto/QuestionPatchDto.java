package com.galmaegi.quetion.dto;

import com.galmaegi.quetion.entity.Question;
import com.galmaegi.validator.NotSpace;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Pattern;
import java.util.Optional;

@Getter
public class QuestionPatchDto {
    private long questionId;

    @NotSpace(message = "커피명(한글)은 공백이 아니어야 합니다.")
    private String korName;

    @Pattern(regexp = "^([A-Za-z])(\\s?[A-Za-z])*$", message = "커피명(영문)은 영문이어야 합니다. 예) Cafe Latte")
    private String engName;

    @Range(min= 100, max= 50000)
    private Integer price;

    private Question.QuestionStatus questionStatus;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public Integer getPrice() {
        return price;
    }
}