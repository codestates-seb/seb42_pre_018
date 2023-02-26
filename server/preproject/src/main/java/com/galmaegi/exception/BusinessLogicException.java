package com.galmaegi.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException {
    @Getter
    private com.galmaegi.exception.ExceptionCode exceptionCode;

    public BusinessLogicException(com.galmaegi.exception.ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
