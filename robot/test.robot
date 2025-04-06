*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Test Cases ***
FirstSeleniumTest
    ${file_url}=    Catenate    SEPARATOR=''    file:///${CURDIR}/../index.html
    Open Browser    ${file_url}    browser=chrome
    Maximize Browser Window
    Click Element    xpath=//*[@id="topBar_Home1"]/a
    ${homePage}=  Get Text  xpath=//*[@id="main"]/center/h1
    Should Be Equal     ${homePage}     各頁面說明

    Click Element    xpath=//*[@id="topBar_Game"]
    Click Element    xpath=//*[@id="typefontgame0"]
    ${gamePage}=  Get Text  xpath=//*[@id="infoOption"]/center/table/tbody/tr/th/h2
    Should Be Equal     ${gamePage}     名稱

    Click Element    xpath=//*[@id="topBar_QA"]
    Click Element    xpath=//*[@id="typeqa0"]
    ${qaPage}=  Get Text  xpath=//*[@id="infoOption"]/select/option
    Should Be Equal     ${qaPage}     生活上的多個Q

    Click Element    xpath=//*[@id="topBar_Tool1"]/a
    ${toolPage}=  Get Text  xpath=//*[@id="infoOption"]/select/option
    Should Be Equal     ${toolPage}     程式編譯

    Click Element    xpath=//*[@id="topBar_weather1"]/a
    Sleep   2s
    Close Browser
