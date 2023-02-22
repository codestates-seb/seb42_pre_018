package com.galmaegi.Answer.entity;

public class Answer {
    private int answer_id;
    private String answer_title;
    private String answer_main;
    private int answer_view;
    private String answer_attachFile;
    private String answer_time;
    private boolean answer_closed;
    private String answer_writer_email;
    private String answer_writer_name;


    public int getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(int answer_id) {
        this.answer_id = answer_id;
    }

    public String getAnswer_title() {
        return answer_title;
    }

    public void setAnswer_title(String answer_title) {
        this.answer_title = answer_title;
    }

    public String getAnswer_main() {
        return answer_main;
    }

    public void setAnswer_main(String answer_main) {
        this.answer_main = answer_main;
    }

    public int getAnswer_view() {
        return answer_view;
    }

    public void setAnswer_view(int answer_view) {
        this.answer_view = answer_view;
    }

    public String getAnswer_attachFile() {
        return answer_attachFile;
    }

    public void setAnswer_attachFile(String answer_attachFile) {
        this.answer_attachFile = answer_attachFile;
    }

    public String getAnswer_time() {
        return answer_time;
    }

    public void setAnswer_time(String answer_time) {
        this.answer_time = answer_time;
    }

    public boolean isAnswer_closed() {
        return answer_closed;
    }

    public void setAnswer_closed(boolean answer_closed) {
        this.answer_closed = answer_closed;
    }

    public String getAnswer_writer_email() {
        return answer_writer_email;
    }

    public void setAnswer_writer_email(String answer_writer_email) {
        this.answer_writer_email = answer_writer_email;
    }

    public String getAnswer_writer_name() {
        return answer_writer_name;
    }

    public void setAnswer_writer_name(String answer_writer_name) {
        this.answer_writer_name = answer_writer_name;
    }
}
