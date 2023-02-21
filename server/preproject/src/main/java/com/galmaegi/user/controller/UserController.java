package com.galmaegi.user.controller;

import com.galmaegi.user.dto.UserPostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@Validated
@RequiredArgsConstructor

public class UserController {

    /* 회원가입
    * sign-up
    * */

    @PostMapping("/sign-up")
    public ResponseEntity signup(@RequestBody @Valid UserPostDto postDto) {
        return new ResponseEntity<>(new SingleResponseDto<>(userService.signup(postDto)), HttpStatus.CREATED);
    }
}
