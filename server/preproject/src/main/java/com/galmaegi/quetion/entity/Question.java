package com.galmaegi.quetion.entity;

public class Question {
    private int question_id;
    private String question_title;
    private String question_main;
    private int question_view;
    private String question_attachFile;
    private String question_time;
    private boolean question_closed;
    private String question_writer_email;
    private String question_writer_name;


    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    public String getQuestion_title() {
        return question_title;
    }

    public void setQuestion_title(String question_title) {
        this.question_title = question_title;
    }

    public String getQuestion_main() {
        return question_main;
    }

    public void setQuestion_main(String question_main) {
        this.question_main = question_main;
    }

    public int getQuestion_view() {
        return question_view;
    }

    public void setQuestion_view(int question_view) {
        this.question_view = question_view;
    }

    public String getQuestion_attachFile() {
        return question_attachFile;
    }

    public void setQuestion_attachFile(String question_attachFile) {
        this.question_attachFile = question_attachFile;
    }

    public String getQuestion_time() {
        return question_time;
    }

    public void setQuestion_time(String question_time) {
        this.question_time = question_time;
    }

    public boolean isQuestion_closed() {
        return question_closed;
    }

    public void setQuestion_closed(boolean question_closed) {
        this.question_closed = question_closed;
    }

    public String getQuestion_writer_email() {
        return question_writer_email;
    }

    public void setQuestion_writer_email(String question_writer_email) {
        this.question_writer_email = question_writer_email;
    }

    public String getQuestion_writer_name() {
        return question_writer_name;
    }

    public void setQuestion_writer_name(String question_writer_name) {
        this.question_writer_name = question_writer_name;
    }
}