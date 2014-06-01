Course Title: JavaScript Unit Testing with Mocha, Chai, and Sinon

# Course Description

In this course, you'll gain a basic understanding of the fundamentals of unit testing your JavaScript code using some popular testing tools. By the end of this course you should feel empowered and excited to start writing tests for all of your JavaScript code, whether it's for the server or the client.


Getting Started
===============

## 01 Introduction

### Time: 00:04:12

To get started, we'll walk through the project that we'll be using to demonstrate unit testing for the rest of the course.

**Related Links:**

* [Install Node.js](http://nodejs.org)
* [Cygwin](http://www.cygwin.com/), a linux-style command prompt for Windows
* [Express](http://expressjs.com/), the Node.js web server framework we use briefly
* [TestlingCI](https://ci.testling.com/) _Note: there's a later video in this series that goes more into detail about this service._


## 02 Writing Your First Test

### Time: 00:13:55

Here we write our first mocha test using most of mocha's defaults. We'll also take a quick look at mocha interfaces and reporters so that we can control the input and output of our tests a little more.

**Related Links:**

* [nodemon](http://nodemon.io/)
* [Mocha docs](http://visionmedia.github.io/mocha/)
* [Node core assert module](http://nodejs.org/api/assert.html)


## 03 Building a Group of Tests (A "Test Suite")

### Time: 00:10:54

As we add more tests, mocha gives us easy ways to organize them into groups using the 'describe' function. We'll also take a  look at asserting that errors are thrown and the concept of "deep equals".

**Related Links:**

* [JavaScript "deep equals" explained](http://stackoverflow.com/a/1144249/171021)


## 04 Mocha on the Command Line

### Time: 00:05:59

Mocha tests are usually run from the command line, so it's a good idea to stop here and go through a few command line options that mocha provides. You can also use npm to run your custom set of flags.

**Related Links:**

* [Running scripts using npm <name>](https://www.npmjs.org/doc/misc/npm-scripts.html)


Fundamental Concepts
====================

## 05 Dependency Injection

### Time: 00:04:54

By passing in dependencies to functions, you can control the context of your tests. This video is a very basic introduction to this concept and how it applies to unit testing.


## 06 Asynchronous Testing

### Time: 00:05:41

JavaScript encourages a lot of async programming concepts, so we need to make sure we can test async functions. In this video, I'll explain how mocha makes async testing incredibly easy.


## 07 Before and After Hooks

### Time: 00:12:52

In this video, we'll look at how the before, after, beforeEach, and afterEach hooks allow you to repeat the same setup or cleanup actions before and after running a group of tests.

_Note: The method of overwriting a file in this video is admittedly terrible, but demonstrates hooks well. We'll talk about why it's terrible and how to solve the problem better in later videos._

**Related Links:**

* [The fs module](http://nodejs.org/api/fs.html)


## 08 Segmenting with Skip and Only

### Time: 00:03:16

There are times when you want to skip over a set of tests, or only run a single test for a while. Skip and only are ways to segment your tests from within the test files without using comments or other hacks.


## 09 Fixtures

### Time: 00:05:49

Here we'll look at how to avoid writing over files and instead use stored sample files for testing, called fixtures.


Using Chai Assertions
=====================

## 10 Chai Assert

### Time: 00:02:20

In this video I'll introduce the Chai assertion library and look at Chai's version of assert.

**Related Links:**

* [Chai assert docs](http://chaijs.com/api/assert/)


## 11 Chai Should

### Time: 00:06:41

The Chai library has a few different assertion styles, and in this video we'll look at how to use the "should" style.

**Related Links:**

* [Chai bdd docs](http://chaijs.com/api/bdd/)


## 12 Chai Expect

### Time: 00:03:00

In this last video about the Chai library, we'll look at how to use the "expect" assertion style.

**Related Links:**

* [Chai bdd docs](http://chaijs.com/api/bdd/)


Putting it All Together
=======================

## 13 Running Mocha Tests in the Browser

### Time: 00:05:00

If you're running tests on your client-side JavaScript, you'll want to be able to test them in browsers. In this video, we'll look at how to run your mocha tests in the browser manually.

**Related Links:**

* [Browserify](http://browserify.org/)


## 14 Automated Browser Testing with Testling

### Time: 00:09:18

In this video, we'll look at how Testling will help you automate your client-side JavaScript tests, with command line tools and a git hook that will run your tests in multiple browsers every time you push to your GitHub repo.

**Related Links:**

* [Testling CI](https://ci.testling.com/)
* [Saucelabs Automated Testing](https://saucelabs.com/)
* [Karma - Spectacular Test Runner](http://karma-runner.github.io/0.12/index.html)


## 15 Continuous Integration with Travis CI

### Time: 00:05:02

Now that we have tests set up for our project, we can take advantage of a continuous integration setup that will run our tests on a separate server when we push to our Git repo. In this video, I'll show you how to set your project up on Travis CI in less than 5 minutes.

**Related Links:**

* [Travis CI](https://travis-ci.org/)


# More Control with SinonJS

## 16 Intro to Sinon

### Time: 00:03:30

In this video we'll introduce Sinon and talk about how to add it to our project. In the next few videos, we'll run through some of the most powerful Sinon tools and show how they can help us write even better unit tests.

**Related Links:**

* [SinonJS](http://sinonjs.org/)


## 17 Sinon Spies

### Time: 00:06:00

Spies are the simplest tool that Sinon offers, and in this video we'll look at how they give us a lot more control over the specifics of what we can test, including whether a method was ever run, how many times, etc.

**Related Links:**

* [SinonJS spies docs](http://sinonjs.org/docs/#spies)


## 18 Sinon Stubs

### Time: 00:04:35

In this video, we'll build on the idea of test spies by adding return values to them, creating something called a "stub".

**Related Links:**

* [SinonJS stubs docs](http://sinonjs.org/docs/#stubs)


## 19 Sinon Mocks

### Time: 00:06:39

In our last Sinon video, we'll look at mocks, which build on spies and stubs by adding in specific, pre-programmed expectations, giving you the most control over your method testing.

**Related Links:**

* [SinonJS mocks docs](http://sinonjs.org/docs/#mocks)
* [SinonJS fake timers](http://sinonjs.org/docs/#clock)
* [SinonJS fake server for faking XHR](http://sinonjs.org/docs/#server)


# Conclusion

## 20 Go Write Some Tests

### Time: 00:01:32

Hopefully you now have a basic understanding of unit testing in JavaScript and that you're encouraged to start writing tests. Happy testing!

