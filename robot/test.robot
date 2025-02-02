*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Test Cases ***
FirstSeleniumTest
    ${file_url}=    Catenate    SEPARATOR=''    file:///${CURDIR}/../index.html
    Open Browser    ${file_url}    browser=chrome
    Maximize Browser Window
    Click Element    xpath=//*[@id="topBar_Home1"]/a
    Click Element    xpath=//*[@id="topBar_Tool1"]/a
    Click Element    xpath=//*[@id="topBar_weather1"]/a
    Sleep   2s
    Close Browser
