import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Your Name"></input>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" id="exampleEmail" placeholder="Your Email"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
