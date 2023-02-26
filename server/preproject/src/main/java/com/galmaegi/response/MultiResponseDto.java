package com.galmaegi.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@AllArgsConstructor
@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private com.galmaegi.response.PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page page){
        this.data = data;
        this.pageInfo = new com.galmaegi.response.PageInfo(page.getNumber()+1,
                page.getSize(),page.getTotalElements(),page.getTotalPages());
    }

}
