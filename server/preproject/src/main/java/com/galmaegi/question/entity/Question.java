package com.galmaegi.question.entity;

import com.galmaegi.answer.entity.Answer;
import com.galmaegi.audit.BaseEntity;
import com.galmaegi.user.domain.UserInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Id;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
// 커밋위해
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "QUESTIONS")
public class Question extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

//    @Column(nullable = false)
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(nullable = false, name = "UPDATED_AT")
//    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_EXIST;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String body;

    @Column(nullable = false)
    private Integer vote=0;

    @Column(nullable = false)
    private int view;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UserInfo user;

    public void addUser(UserInfo user) {
        this.user = user;
    }

    @OneToMany(mappedBy = "question",cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();


    public enum QuestionStatus {
        QUESTION_NOT_EXIST("존재하지 않는 질문"),
        QUESTION_EXIST("존재하는 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}