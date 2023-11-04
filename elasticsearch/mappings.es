PUT nested_task
{
  "mappings": {
    "properties": {
      "doc_id": {
        "type": "keyword"
      },
      "doctype": {
        "type": "keyword"
      },
      "root": {
        "type": "keyword"
      },
      "path": {
        "type": "keyword"
      },
      "pathid": {
        "type": "keyword"
      },
      "userid": {
        "type": "keyword"
      },
      "hr": {
        "type": "keyword"
      },
      "email": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "employeeid": {
        "type": "keyword"
      },
      "addr1": {
        "type": "text"
      },
      "state": {
        "type": "keyword"
      },
      "firstname": {
        "type": "text"
      },
      "status": {
        "type": "keyword"
      },
      "phone": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "city": {
        "type": "text"
      },
      "username": {
        "type": "keyword"
      },
      "joblevel": {
        "type": "keyword"
      },
      "zip": {
        "type": "text"
      },
      "hiredate": {
        "type": "date",
        "format": "yyyy-MM-dd"
      },
      "gender": {
        "type": "keyword"
      },
      "candidateid": {
        "type": "keyword"
      },
      "dob": {
        "type": "date",
        "format": "yyyy-MM-dd"
      },
      "manager": {
        "type": "keyword"
      },
      "lastname": {
        "type": "text"
      },
      "jobcode": {
        "type": "keyword"
      },
      "personid": {
        "type": "keyword"
      },
      "employee": {
        "type": "nested",
        "properties": {
          "status": {
            "type": "keyword"
          },
          "userid": {
            "type": "keyword"
          },
          "username": {
            "type": "keyword"
          },
          "firstname": {
            "type": "text"
          },
          "lastname": {
            "type": "text"
          },
          "gender": {
            "type": "keyword"
          },
          "email": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "manager": {
            "type": "keyword"
          },
          "hr": {
            "type": "keyword"
          },
          "custom02": {
            "type": "text"
          },
          "department": {
            "type": "text"
          },
          "location": {
            "type": "text"
          },
          "custom03": {
            "type": "text"
          },
          "custom14": {
            "type": "text"
          },
          "division": {
            "type": "text"
          },
          "custom04": {
            "type": "text"
          },
          "custom11": {
            "type": "text"
          },
          "custom10": {
            "type": "text"
          },
          "custom13": {
            "type": "text"
          },
          "jobcode": {
            "type": "keyword"
          },
          "hiredate": {
            "type": "date",
            "format": "yyyy-MM-dd"
          },
          "title": {
            "type": "keyword"
          },
          "timezone": {
            "type": "keyword"
          },
          "country": {
            "type": "keyword"
          },
          "custom01": {
            "type": "text"
          },
          "custom05": {
            "type": "text"
          },
          "custom06": {
            "type": "text"
          },
          "custom07": {
            "type": "text"
          },
          "custom08": {
            "type": "text"
          },
          "custom09": {
            "type": "text"
          },
          "custom12": {
            "type": "text"
          },
          "custom_manager": {
            "type": "keyword"
          },
          "default_locale": {
            "type": "keyword"
          },
          "login_method": {
            "type": "keyword"
          },
          "review_freq": {
            "type": "keyword"
          },
          "final_jobcode": {
            "type": "keyword"
          },
          "final_jobfamily": {
            "type": "keyword"
          },
          "final_jobrole": {
            "type": "keyword"
          },
          "seatingchart": {
            "type": "keyword"
          },
          "nickname": {
            "type": "text"
          },
          "salutation": {
            "type": "keyword"
          },
          "suffix": {
            "type": "keyword"
          },
          "joblevel": {
            "type": "keyword"
          },
          "addr1": {
            "type": "text"
          },
          "city": {
            "type": "keyword"
          },
          "state": {
            "type": "keyword"
          },
          "zip": {
            "type": "keyword"
          },
          "date_of_birth": {
            "type": "date",
            "format": "yyyy-MM-dd"
          },
          "employeeid": {
            "type": "keyword"
          },
          "phone": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "fullname": {
            "type": "text"
          },
          "dob": {
            "type": "date",
            "format": "yyyy-MM-dd"
          },
          "skills": {
            "type": "nested",
            "properties": {
              "skill": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword"
                  }
                }
              },
              "proficiency": {
                "type": "rank_feature"
              }
            }
          },
          "candidateid": {
            "type": "keyword"
          },
          "personid": {
            "type": "keyword"
          },
          "doctype": {
            "type": "keyword"
          },
          "root": {
            "type": "keyword"
          },
          "path": {
            "type": "keyword"
          },
          "pathid": {
            "type": "keyword"
          }
        }
      },
      "candidate": {
        "type": "nested",
        "properties": {
          "email_address1": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "unique_email_address1": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "gender": {
            "type": "keyword"
          },
          "lastname": {
            "type": "text"
          },
          "firstname": {
            "type": "text"
          },
          "middle:name": {
            "type": "text"
          },
          "contact_number": {
            "type": "text"
          },
          "fax_number": {
            "type": "text"
          },
          "address": {
            "type": "text"
          },
          "main_contact": {
            "type": "text"
          },
          "last_modified": {
            "type": "date"
          },
          "date_of_availability": {
            "type": "date"
          },
          "city": {
            "type": "keyword"
          },
          "state": {
            "type": "keyword"
          },
          "zip": {
            "type": "keyword"
          },
          "home_phone": {
            "type": "text"
          },
          "cell_phone": {
            "type": "text"
          },
          "dob": {
            "type": "date"
          },
          "min_annual_sal": {
            "type": "float"
          },
          "ethnicity": {
            "type": "text"
          },
          "email_address2": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "last_login": {
            "type": "date"
          },
          "country_code": {
            "type": "keyword"
          },
          "share_profile_tag": {
            "type": "keyword"
          },
          "public_intranet": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword"
              }
            }
          },
          "history_id": {
            "type": "short"
          },
          "creation_date": {
            "type": "date"
          },
          "anonymized_flag": {
            "type": "keyword"
          },
          "anonymized_date": {
            "type": "date"
          },
          "cand_locale": {
            "type": "keyword"
          },
          "account_status": {
            "type": "short"
          },
          "partner_source": {
            "type": "short"
          },
          "visibility_options_prompt_flag": {
            "type": "keyword"
          },
          "marketing_consent": {
            "type": "keyword"
          },
          "lower_email_address1": {
            "type": "text"
          },
          "lower_email_address2": {
            "type": "text"
          },
          "lower_firstname": {
            "type": "text"
          },
          "lower_middlename": {
            "type": "text"
          },
          "lower_lastname": {
            "type": "text"
          },
          "lower_first_lastname": {
            "type": "text"
          },
          "lower_last_firstname": {
            "type": "text"
          },
          "employeeid": {
            "type": "keyword"
          },
          "personid": {
            "type": "keyword"
          },
          "lowercase_email_address2": {
            "type": "text"
          },
          "candidateid": {
            "type": "keyword"
          },
          "lower_firstname_lastname": {
            "type": "text"
          },
          "lower_lastname_firstname": {
            "type": "text"
          },
          "doctype": {
            "type": "keyword"
          },
          "root": {
            "type": "keyword"
          },
          "path": {
            "type": "keyword"
          },
          "pathid": {
            "type": "keyword"
          }
        }
      }
    }
  }
}
