package com.galmaegi.user.dto;

import com.galmaegi.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserPostDto {

    @Email
    @NotBlank(message = "이메일은 공백일 수 없습니다.")
    private String email;

    @Size(min=2, max=20, message="이름은 2자 이상, 20자 이하여야 합니다.")
    private String name;

    @Size(min=8, max=15, message="비밀번호는 8자 이상, 15자 이하여야 합니다.")
    private String password;

    public User toUser(PasswordEncoder passwordEncoder) {
        return User.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .name(name)
                .authority(ROLE_USER)
                .build();
    }




}
