package com.codestates.coffee.dto;

import com.codestates.coffee.entity.Coffee;
import lombok.Builder;
import lombok.Getter;


@Builder
@Getter
public class QuestionResponseDto {
    private long coffeeId;
    private String korName;
    private String engName;
    private int price;
    private Question.QuestionStatus questionStatus;

    public String getCoffeeStatus() {
        return questionStatus.getStatus();
    }
}
