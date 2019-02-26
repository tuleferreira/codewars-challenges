/* https://www.codewars.com/kata/597c684822bc9388f600010f */

public class Dinglemouse {

  private String firstName;
  private String lastName;
  
  public Dinglemouse(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  public String getFullName() { 
    return (firstName + " " + lastName).trim();
  }
  
}