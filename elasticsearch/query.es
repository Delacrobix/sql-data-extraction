GET nested_task/_search
{
  "query": {
    "bool": {
      "should": [
        {
          "multi_match": {
            "query": "",
            "fields": [
              "firstname",
              "lastname",
              "joblevel",
              "city",
              "state"
            ]
          }
        },
        {
          "nested": {
            "path": "employee",
            "query": {
              "bool": {
                "should": [
                  {
                    "multi_match": {
                      "query": "",
                      "fields": [
                        "employee.title",
                        "employee.custom*",
                        "employee.department"
                      ]
                    }
                  },
                  {
                    "nested": {
                      "path": "employee.skills",
                      "query": {
                        "bool": {
                          "must": [
                            {
                              "match": {
                                "employee.skills.skill.keyword": ""
                              }
                            },
                            {
                              "rank_feature": {
                                "field": "employee.skills.proficiency"
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "filter": [
        {
          "bool": {
            "should": [
              {
                "match": {
                  "city": ""
                }
              },
              {
                "term": {
                  "jobcode": ""
                }
              },
              {
                "term": {
                  "state": ""
                }
              },
              {
                "nested": {
                  "path": "employee",
                  "query": {
                    "bool": {
                      "must": [
                        {
                          "range": {
                            "employee.date_of_birth": {
                              "gte": "1999-01-01"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              {
                "nested": {
                  "path": "employee",
                  "query": {
                    "bool": {
                      "must": [
                        {
                          "nested": {
                            "path": "employee.skills",
                            "query": {
                              "bool": {
                                "must": [
                                  {
                                    "term": {
                                      "employee.skills.skill.keyword": ""
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
}
