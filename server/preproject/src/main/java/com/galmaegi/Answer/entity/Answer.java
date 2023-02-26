package com.galmaegi.answer.entity;

import com.galmaegi.audit.BaseEntity;
import com.galmaegi.question.entity.Question;
import com.galmaegi.user.domain.UserInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Id;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ANSWERS")
public class Answer extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

//    @Column(nullable = false)
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(nullable = false, name = "UPDATED_AT")
//    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_EXIST;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String body;

    @Column(nullable = false)
    private int vote=0;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UserInfo user;

    public void addUser(UserInfo user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }

    public enum AnswerStatus {
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}