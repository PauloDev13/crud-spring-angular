package com.devpgm.models;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Course {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(length = 200, nullable = false)
  private String name;

  @Column(length = 10, nullable = false)
  private String category;
}
