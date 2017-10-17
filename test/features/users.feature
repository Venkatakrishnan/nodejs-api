Feature: User Router
  Background:
    Given the following initial state:
    """
    {
      data: [
      ]
    }
    """
    Scenario: Index
        When we HTTP GET '/users'
        Then our HTTP response should be like:
        """
[{
  "id": 1,
  "first_name": "Eric",
  "last_name": "Jordan",
  "email": "ejordan0@mozilla.com",
  "gender": "Male",
  "ip_address": "15.241.88.79"
}, {
  "id": 2,
  "first_name": "Kathryn",
  "last_name": "Owens",
  "email": "kowens1@cmu.edu",
  "gender": "Female",
  "ip_address": "237.165.246.140"
}, {
  "id": 3,
  "first_name": "Irene",
  "last_name": "Jones",
  "email": "ijones2@techcrunch.com",
  "gender": "Female",
  "ip_address": "44.202.94.229"
}, {
  "id": 4,
  "first_name": "Aaron",
  "last_name": "Baker",
  "email": "abaker3@tumblr.com",
  "gender": "Male",
  "ip_address": "57.132.132.43"
}, {
  "id": 5,
  "first_name": "Patricia",
  "last_name": "Washington",
  "email": "pwashington4@skyrock.com",
  "gender": "Female",
  "ip_address": "167.68.179.168"
}]        
        """
    Scenario: get non-existent
        When we HTTP GET '/nonexistent'
        Then our HTTP response should have status code 404