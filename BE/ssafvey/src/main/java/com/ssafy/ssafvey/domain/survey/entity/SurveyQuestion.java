package com.ssafy.ssafvey.domain.survey.entity;

import com.ssafy.ssafvey.domain.member.entity.MemberAnswerDescriptive;
import com.ssafy.ssafvey.domain.member.entity.MemberAnswerMultipleChoice;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(force = true)
@ToString
public class SurveyQuestion {
    @Id
    @GeneratedValue
    private Long id;

    private int orderNum;

    @Lob
    private String question;

    private Boolean isMultipleChoice;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @OneToMany(mappedBy = "surveyQuestion")
    private List<MemberAnswerMultipleChoice> memberAnswerMultipleChoices = new ArrayList<>();

    @OneToMany(mappedBy = "surveyQuestion")
    private List<MemberAnswerDescriptive> memberAnswerDescriptives = new ArrayList<>();

    @OneToMany(mappedBy = "surveyQuestion")
    private List<SurveyQuestionChoice> surveyQuestionChoices = new ArrayList<>();
}