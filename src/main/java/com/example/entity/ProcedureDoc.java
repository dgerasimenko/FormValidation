package com.example.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class ProcedureDoc {
    private Long id;
    private String formId;
    private String title;
    private String description;
    private String username;// (createUser/Author)
    private String revision;
    private String location;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime submittedDate;
    private String workflowName;

    public ProcedureDoc() {
    }

    public ProcedureDoc(Long id, String formId, String title, String description, String username, String revision, String location, LocalDateTime submittedDate, String workflowName) {
        this.id = id;
        this.formId = formId;
        this.title = title;
        this.description = description;
        this.username = username;
        this.revision = revision;
        this.location = location;
        this.submittedDate = submittedDate;
        this.workflowName = workflowName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFormId() {
        return formId;
    }

    public void setFormId(String formId) {
        this.formId = formId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRevision() {
        return revision;
    }

    public void setRevision(String revision) {
        this.revision = revision;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDateTime getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(LocalDateTime submittedDate) {
        this.submittedDate = submittedDate;
    }

    public String getWorkflowName() {
        return workflowName;
    }

    public void setWorkflowName(String workflowName) {
        this.workflowName = workflowName;
    }

    @Override
    public String toString() {
        return "ProcedureDoc{" +
                "id=" + id +
                ", formId='" + formId + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", username='" + username + '\'' +
                ", revision='" + revision + '\'' +
                ", location='" + location + '\'' +
                ", submittedDate=" + submittedDate +
                ", workflowName='" + workflowName + '\'' +
                '}';
    }
}
