package com.galmaegi.user.service;

import com.galmaegi.user.dto.UserPostDto;

public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponseDto signup(UserPostDto postDto {
        if (userRepository.existsByEmail(postDto.getEmail())) {
            throw new BusinessLogicException(EMAIL_EXISTS);
        }
    }
}
