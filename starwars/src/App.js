import React, { Component } from 'react';
import './App.css';
// import CharacterList from './components/CharacterList';
import ReactAudioPlayer from 'react-audio-player';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <ReactAudioPlayer 
          preload="none"
          autoPlay
          src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
          controls
        />
        <section className="intro">
          A long time ago, in a galaxy far,<br/> far away....
        </section>
        <section className="logo">
            <img alt="star wars logo" src="data:image/svg+xml;base64,ICA8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9y%0D%0AZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9%0D%0AIjBweCIgeT0iMHB4IgogIHdpZHRoPSI2OTMuNjE1cHgiIGhlaWdodD0iNDE5LjM3NXB4IiB2aWV3%0D%0AQm94PSIwIDAgNjkzLjYxNSA0MTkuMzc1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2OTMu%0D%0ANjE1IDQxOS4zNzUiCiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPGcgaWQ9IkxheWVyXzIiPgog%0D%0AICAgPGc+CiAgICAgIDxwYXRoIGZpbGw9IiNGRkU4MUYiIGQ9Ik0xNDguNzE4LDIyMS4yMDdsOC42%0D%0ANywyNS40NjFjNC42OTEsMTMuNzY4LDguODc5LDI0Ljc3OSw5LjQyNSwyNC43NzljMC4wMDksMCww%0D%0ALjAxNy0wLjAwNCwwLjAyNC0wLjAxCiAgICAgIGMwLjYtMC41MywxNy41Ny00OS44MTEsMTcuNTct%0D%0ANDkuODExaDMyLjg5bC0zOS42OCwxMTUuNjE5aC0yMi44NmMwLDAtMjQuNC03MC40NzEtMjQuMy03%0D%0AMC43MzlsLTI1LjQ3LDY5Ljg1MWgtMjIuNjMKICAgICAgbC0zOS4xOC0xMTUuMTVsMzIuNzMsMC4w%0D%0AMjFjMCwwLDE3LjkyOSw1MC44MjEsMTguMTY4LDUwLjgyMWMwLjAwMSwwLDAuMDAxLTAuMDAxLDAu%0D%0AMDAyLTAuMDAybDE3Ljg5LTUwLjg0MUgxNDguNzE4IE0zMi4wMDMsMjEzLjIKICAgICAgbDMuNjAx%0D%0ALDEwLjU4NGwzOS4xOCwxMTUuMTQ5bDEuODQ1LDUuNDI0aDUuNzI5aDIyLjYzaDUuNTk4bDEuOTE4%0D%0ALTUuMjZsMTcuNjg1LTQ4LjVjMS41MjQsNC40MzQsMy4xNzEsOS4yMTMsNC44MTgsMTMuOTg4CiAg%0D%0AICAgIGM2LjA4OSwxNy42NTUsMTIuMTkxLDM1LjI3NywxMi4xOTEsMzUuMjc3bDEuODY0LDUuMzgz%0D%0AaDUuNjk2aDIyLjg2aDUuNzEybDEuODU0LTUuNDAzbDM5LjY4LTExNS42MThsMy42MzctMTAuNTk4%0D%0AaC0xMS4yMDRoLTMyLjg5CiAgICAgIGgtNS43MDZsLTEuODU4LDUuMzk2Yy0yLjk3NCw4LjYzNS02%0D%0ALjkyMSwyMC4wMzEtMTAuMjk2LDI5LjY3NmMtMC41MDktMS40NjMtMS4wMzktMy4wMDEtMS41ODct%0D%0ANC42MTFsLTguNjY5LTI1LjQ2bC0xLjg0Ni01LjQyMQogICAgICBoLTUuNzI3aC0zNi43NWgtNS42%0D%0ANjZsLTEuODgxLDUuMzQ1bC0xMC40NTMsMjkuNzA2Yy0zLjQ1My05LjcwNi03LjQ1Ni0yMS4wMTct%0D%0AMTAuNTE2LTI5LjY5MWwtMS44ODItNS4zMzRsLTUuNjU3LTAuMDA0CiAgICAgIGwtMzIuNzMtMC4w%0D%0AMjFMMzIuMDAzLDIxMy4yTDMyLjAwMywyMTMuMnoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8%0D%0AcGF0aCBmaWxsPSIjRkZFODFGIiBkPSJNNjU1LjI1OCwyMjAuNzU4bC0wLjA3NSwzMC4zMDVjMCww%0D%0ALTMyLjY0My0wLjEwOS00OS4yMzktMC4xMDljLTUuNTIxLDAtOS4yNjYsMC4wMTMtOS40NDQsMC4w%0D%0ANDUKICAgICAgYy0yLjg2LDAuNTIxLTQuNjgxLDYuNjAyLTMuODcsOS4yNzFjMC4zOTksMS4zNSwz%0D%0ALjM5MSw1Ljc2LDYuNjMsOS44MWMzLjIyOSw0LjA1MSw4LjU0LDEwLjY4MSwxMS43OCwxNC43MjkK%0D%0AICAgICAgYzguMzE5LDEwLjM4MSw5LjQ2LDEyLjQzLDEwLjIyOSwxOC4zOTFjMS4yNSw5LjY4MS0z%0D%0ALjMyOSwyMC4xNi0xMS44MjksMjcuMDdjLTguNTE4LDYuOTMtOC4xNDUsNi45NzktNzEuMzgzLDYu%0D%0AOTc5CiAgICAgIGMtMC45MTYsMC0xLjgzNSwwLTIuNzc3LDBjLTM4LjQ2LTAuMDEtNTguOC0wLjMy%0D%0AOS02MS43NjEtMC45ODljLTUuMjYtMS4xOS0xMy42NC04LjAzLTM1Ljc5LTI5LjI4CiAgICAgIGMt%0D%0ANy45NjctNy42MzYtMTUuMzA5LTE0LjMyMi0xNS42ODYtMTQuMzI0Yy0wLjAxLDAtMC4wMTUsMC4w%0D%0AMDYtMC4wMTUsMC4wMTZsLTAuMjYxLDQ0LjU3OWwtMzUuODk5LTAuMTU5bC0wLjIyMS0xMTQuOTho%0D%0ANDUuMjcxCiAgICAgIGgzNC43OWMyNC4xMywwLjg3MSw0MC40NiwyNC45MSwzNy4yMSw0MC4yNGMt%0D%0AMC43NCwzLjQ3OS0yLjYyLDguNTIxLTQuMTgxLDExLjJjLTMuMjEsNS41LTExLjM4LDEyLjU2LTE4%0D%0ALjAxMSwxNS41OTEKICAgICAgYy0yLjQ0OSwxLjEwOC00LjQ0OSwyLjM5OC00LjQ0OSwyLjg1OGMw%0D%0ALDEuNzEsOC4wNjEsOS42NDksMTEuMDgsMTAuOTFjMi41NzksMS4wNzksMTAuMDksMS4zMTksNDMu%0D%0AMjEsMS4zMTkKICAgICAgYzMuODgyLDAsNy40MDgsMC4wMDIsMTAuNjA4LDAuMDAyYzMzLjI5Myww%0D%0ALDMxLjYxOC0wLjI0LDM0LjE5LTUuNzQxYzEuODAxLTMuODMsMC40MzEtNi4xMi0xMi4yMzktMjAu%0D%0AMzkKICAgICAgYy0xNi4wNTEtMTUuOTcxLTE0LjM3LTIzLjYyMS0xNC40OC0yOS4yNzFjLTAuMjI5%0D%0ALTYuNzcsNS4xMDItMjguMDY5LDMyLjgxMi0yOC4wNjlMNjU1LjI1OCwyMjAuNzU4IE00NDAuMTg4%0D%0ALDI3My44NzgKICAgICAgYzE1LjM3LDAsMTguNDktMC4yMzksMjEuNzYxLTEuNjZjMTEuMDQtNC44%0D%0ALDExLjYzLTE4Ljk3OSwxLjA0LTI1LjI3MWMtMi4zMTktMS4zODEtNS4zLTEuNjA5LTIxLjk2LTEu%0D%0AN2wtMTkuMjc5LTAuMTAxCiAgICAgIGMwLjE1OSwwLjE1LTAuMDYxLDI3LjU3LTAuMDYxLDI3LjU3%0D%0AUzQyNi41MTgsMjczLjg3OCw0NDAuMTg4LDI3My44NzggTTY2My4yNzcsMjEyLjc1OGgtOC4wMjFo%0D%0ALTczLjgKICAgICAgYy0xNi4wMzIsMC0yNS41MTUsNi4zMjgtMzAuNjQ2LDExLjYzN2MtOC4zNDcs%0D%0AOC42MzMtMTAuMzEzLDE5LjUwNC0xMC4xNjIsMjQuNjI5YzAuMDA4LDAuNDI3LDAuMDAzLDAuODY1%0D%0ALTAuMDAyLDEuMzIyCiAgICAgIGMtMC4wNzMsOC4zMjksMS4xNTQsMTcuNzU4LDE2LjY1OSwzMy4y%0D%0ANDZjMy4wNjUsMy40NTIsOC4xOTMsOS4yMzksMTAuMTMxLDEyLjExNWMtNC4yMzgsMC41MjEtMTQu%0D%0AOTgsMC41MjEtMjYuMjYyLDAuNTIxaC00Ljc5MgogICAgICBsLTUuODE2LTAuMDAyYy0xOS45MDQs%0D%0AMC0zNi42ODgtMC4wNTctNDAuMTI4LTAuNzM2Yy0wLjQ4MS0wLjMxNC0xLjE1Ni0wLjg1NC0xLjg5%0D%0AOC0xLjQ5OGM2Ljg3Ny00LjIzNSwxMy44My0xMC43OTksMTcuMTA0LTE2LjQxMgogICAgICBjMS45%0D%0AODctMy40MTMsNC4xNzgtOS4yNDMsNS4wOTgtMTMuNTY4YzIuMDQtOS42MjUtMS4zMjUtMjEuMjM2%0D%0ALTkuMDAxLTMxLjA2OGMtOC45NTYtMTEuNDcxLTIxLjk4NS0xOC4zMzQtMzUuNzQ2LTE4LjgzCiAg%0D%0AICAgIGwtMC4xNDUtMC4wMDZoLTAuMTQ1aC0zNC43OWgtNDUuMjcxaC04LjAxNmwwLjAxNiw4LjAx%0D%0AN2wwLjIyMSwxMTQuOTc5bDAuMDE2LDcuOTQ5bDcuOTQ5LDAuMDM1bDM1Ljg5OSwwLjE1OWw3Ljk4%0D%0AOCwwLjAzNQogICAgICBsMC4wNDctNy45ODhsMC4xNTUtMjYuNzA2YzAuNzMzLDAuNjk2LDEuNDkx%0D%0ALDEuNDE5LDIuMjY5LDIuMTY1YzI0LjIyNywyMy4yNCwzMi4zNTksMjkuNjc5LDM5LjU2MiwzMS4z%0D%0AMDgKICAgICAgYzEuOTc5LDAuNDQxLDUuMjUzLDEuMTcyLDYzLjUyMywxLjE4OGgyLjc3OWMzMS41%0D%0ANDYsMCw0Ny4zOCwwLDU2Ljc5OS0wLjkxYzEwLjc4OS0xLjA0MywxNC4yNTktMy40OSwxOS40NjEt%0D%0ANy43MjVsMC4xNzMtMC4xNDEKICAgICAgYzEwLjY4NS04LjY4NywxNi4zMjMtMjEuODMsMTQuNzE1%0D%0ALTM0LjNjLTEuMDQ4LTguMTEtMy4xOTQtMTEuNDc5LTExLjkyMi0yMi4zNjhsLTIuNTk0LTMuMjQK%0D%0AICAgICAgYy0zLjA0LTMuNzk5LTYuNzEzLTguMzg3LTkuMTc1LTExLjQ3NWMtMS45ODYtMi40ODQt%0D%0AMy41NDYtNC42ODktNC40ODctNi4xMzNjMS4yMzYtMC4wMDMsMi44NDEtMC4wMDUsNC45MTgtMC4w%0D%0AMDUKICAgICAgYzE2LjM5NSwwLDQ4Ljg4NywwLjEwOCw0OS4yMTMsMC4xMWw4LjAwOCwwLjAyNmww%0D%0ALjAyLTguMDA4bDAuMDc1LTMwLjMwNkw2NjMuMjc3LDIxMi43NThMNjYzLjI3NywyMTIuNzU4eiBN%0D%0ANDI5LjczOSwyNjUuNTg2CiAgICAgIGMwLjAxMy0yLjAyMSwwLjAyNS00LjI4NywwLjAzOC02LjU1%0D%0AN2MwLjAxLTIsMC4wMTktNC4wMDQsMC4wMjItNS44NGwxMS4xODcsMC4wNThjNi40MjksMC4wMzUs%0D%0AMTYuMTAzLDAuMDg4LDE3Ljk4OSwwLjYyMwogICAgICBjMi40MDcsMS40NjEsMy43NSwzLjcyLDMu%0D%0ANjA0LDYuMDZjLTAuMDgsMS4yNjQtMC42ODIsMy41ODgtMy44MjEsNC45NTFjLTEuNzUsMC43Ni00%0D%0ALjU0LDAuOTk3LTE4LjU3LDAuOTk3CiAgICAgIEM0MzUuNzM4LDI2NS44NzgsNDMyLjMwNSwyNjUu%0D%0ANzQ5LDQyOS43MzksMjY1LjU4Nkw0MjkuNzM5LDI2NS41ODZ6Ii8+CiAgICA8L2c+CiAgICA8Zz4K%0D%0AICAgICAgPHBhdGggZmlsbD0iI0ZGRTgxRiIgZD0iTTMxMi45MDgsMjIwLjI4N2w0MC4yOSwxMTUu%0D%0AOTJsLTMyLjgzLDAuMTVsLTUuNDUtMTcuNDFsLTU4LjctMC40NzFsLTUuMTgsMTcuNDMxbC0zMi41%0D%0ALTAuMzQxCiAgICAgIGwzOS43OC0xMTUuMjI5TDMxMi45MDgsMjIwLjI4NyBNMjg2LjUwNywyMzcu%0D%0AMjgzYy0wLjA4MywwLjMzMy01LjE0NCwxNC4yMTktMTAuMjIyLDI4LjEwNGMtNS4xMiwxNC0xMC4y%0D%0ANTcsMjgtMTAuMzI4LDI4LjEwOQogICAgICBjMCwwLjAwMS0wLjAwMSwwLjAwMSwwLDAuMDAxbDAs%0D%0AMGMwLDAsMCwwLDAtMC4wMDFjMC4xMzYtMC4wNCwxOC4zMTYtMC4wOCwyOS45NjgtMC4wOGM1LjQ1%0D%0AMywwLDkuNDc1LDAuMDA5LDkuNTUsMC4wMjkKICAgICAgYzAuMDAxLDAuMDA0LDAuMDAxLDAuMDA1%0D%0ALDAuMDAxLDAuMDA1czAtMC4wMDEsMC0wLjAwM2MwLDAsMCwwLTAuMDAxLTAuMDAyQzMwNS4yNzEs%0D%0AMjkyLjkxNiwyODYuNTY2LDIzNy45NTksMjg2LjUwNywyMzcuMjgzCiAgICAgIGMwLjAwMS0wLjAw%0D%0ANCwwLjAwMS0wLjAwNiwwLjAwMS0wLjAwNmwwLDBDMjg2LjUwNywyMzcuMjc3LDI4Ni41MDcsMjM3%0D%0ALjI3OSwyODYuNTA3LDIzNy4yODMgTTMxOC41OTUsMjEyLjI4MmwtNS42OTMsMC4wMDUKICAgICAg%0D%0AbC01NC41OSwwLjA1MWwtNS42OTYsMC4wMDVsLTEuODU5LDUuMzg2bC0zOS43OCwxMTUuMjI5bC0z%0D%0ALjYyMywxMC40OTRsMTEuMTAyLDAuMTE1bDMyLjUsMC4zNDFsNi4wMzMsMC4wNjNsMS43MTktNS43%0D%0AODIKICAgICAgbDMuNDY2LTExLjY2Mmw0Ni44NTQsMC4zNzVsMy43MDgsMTEuODQ4bDEuNzY1LDUu%0D%0ANjM4bDUuOTA3LTAuMDI2bDMyLjgyOS0wLjE1bDExLjE5NS0wLjA1MmwtMy42NzYtMTAuNTc0bC00%0D%0AMC4yOS0xMTUuOTIKICAgICAgTDMxOC41OTUsMjEyLjI4MkwzMTguNTk1LDIxMi4yODJ6IE0yNzcu%0D%0ANDcyLDI4NS40MjRjMS41MTUtNC4xMjksMy41NTYtOS43MSw2LjMyNy0xNy4yODljMC44NjktMi4z%0D%0ANzYsMS42NjQtNC41NTEsMi4zOTMtNi41NDUKICAgICAgYzAuNjYzLDEuOTU2LDEuMzg1LDQuMDg0%0D%0ALDIuMTY5LDYuMzk4YzAuNjQ2LDEuOTA2LDMuNDg1LDEwLjI3LDUuOTIsMTcuNDI4QzI4Ny4wNDEs%0D%0AMjg1LjQxNiwyODEuNTkxLDI4NS40MTcsMjc3LjQ3MiwyODUuNDI0CiAgICAgIEwyNzcuNDcyLDI4%0D%0ANS40MjR6Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZmlsbD0iI0ZGRTgxRiIgZD0i%0D%0ATTMyNi40ODgsODEuOTI4djI4LjZoLTU3LjI4djg3LjQ3aC0zNC4xNXYtODcuNTRsLTY2Ljg2LDAu%0D%0AMTljLTguMDYsMC05LjE0LDYuNDItOS4xNCw4Ljg4CiAgICAgIGMwLDMuMDIsMS45Nyw2LjA0LDEy%0D%0ALjc5LDE5Ljc0YzcuMDIsOC45LDEzLjQ3LDE3Ljc4LDE0LjMyLDE5LjcyYzQuNjQsMTAuNjgtMS4z%0D%0ANiwyNy4zMi0xMi4yOSwzNC4wOAogICAgICBjLTcuNzksNC44MTMtNi40NTksNC45MzEtNjQuMzA4%0D%0ALDQuOTMxYy0yLjk3NCwwLTYuMDk2LDAtOS4zOTIsMGgtNjIuMjd2LTMyLjEzaDk3LjlsMi44OS0y%0D%0ALjAxYzEuOTUtMS4zNiwzLjA4LTMuMjMsMy41MS01Ljc5CiAgICAgIGMwLjYtMy42OCwwLjI5LTQu%0D%0AMTYtMTEuOC0xNy43OGMtMTQuMjktMTYuMS0xNS44LTE5LjA0LTE1LjA2LTI5LjMyYzAuODQtMTEu%0D%0ANzMsMTEuMy0yOC43NywyOS41OC0yOC43N0wzMjYuNDg4LDgxLjkyOAogICAgICBNMzM0LjQ4OCw3%0D%0AMy45MTZsLTguMDEzLDAuMDEybC0xODEuNTYsMC4yN2MtMTAuNDU4LDAtMjAuMTcxLDQuNTE4LTI3%0D%0ALjM0MiwxMi43MjJjLTUuODE0LDYuNjUyLTkuNjMsMTUuNDI5LTEwLjIwNiwyMy40NzcKICAgICAg%0D%0AYy0wLjk3MywxMy41MTEsMi4xMzcsMTguMzkzLDE3LjA1NiwzNS4yMDJjNC4zMyw0Ljg3Nyw4LjQ0%0D%0ANyw5LjUxNiw5LjgyMSwxMS40ODZjLTAuMDIyLDAuMDc5LTAuMDQyLDAuMTMtMC4wNTQsMC4xNTkK%0D%0AICAgICAgYy0wLjAxNSwwLjAxMi0wLjAzOCwwLjAzLTAuMDcsMC4wNTJsLTAuODIyLDAuNTcySDM3%0D%0ALjkwOGgtOHY4djMyLjEzdjhoOGg2Mi4yN2g0LjkzN2g0LjQ1NWMyOC41MjIsMCw0Mi42LTAuMDI3%0D%0ALDUwLjg5NC0wLjYzNQogICAgICBjOS40OS0wLjY5NSwxMi41MTgtMi4zMjMsMTcuMDU0LTUuMTRs%0D%0AMC41NjYtMC4zNTFjMTQuMjYyLTguODIxLDIxLjYxMi0yOS44MjcsMTUuNDIyLTQ0LjA3NAogICAg%0D%0AICBjLTEuOTEtNC4zNTgtMTQuMDAzLTE5Ljc0Ni0xNS4zNzYtMjEuNDg2Yy0zLjc5Ni00LjgwNy0x%0D%0AMC4wNjItMTIuNzQtMTEuMDU0LTE1LjAzNmMwLjAyNC0wLjE5MywwLjA3MS0wLjM5MywwLjEyMS0w%0D%0ALjUzMgogICAgICBjMC4xNjUtMC4wNDIsMC40ODEtMC4wOTgsMS4wMDEtMC4wOThsNTguODYtMC4x%0D%0ANjd2NzkuNTE3djhoOGgzNC4xNWg4di04di03OS40N2g0OS4yOGg4di04di0yOC42VjczLjkxNkwz%0D%0AMzQuNDg4LDczLjkxNnoiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBmaWxsPSIjRkZF%0D%0AODFGIiBkPSJNNDE5LjU0OCw4Mi44NTdsNDAuMTgsMTE2LjIybC0zMi43Ny0wLjE4bC01LjMyLTE3%0D%0ALjQxbC01OC40MzktMC4yNmwtNS4yMjEsMTYuNzdoLTMzLjM2OWwzOS43MzktMTE1LjE0CiAgICAg%0D%0AIEg0MTkuNTQ4IE0zNzIuNzM3LDE1Ni40NzhsMzkuODAxLTAuMDVjMC4wMDEsMCwwLjAwMSwwLjAw%0D%0AMSwwLjAwMSwwLjAwMWMwLjEzNiwwLTE5LjM0Mi01Ny4yMDEtMTkuNDcyLTU3LjI0MWwwLDAKICAg%0D%0AICAgQzM5Mi45MjUsOTkuMTgzLDM3Mi4yODgsMTU2LjQ3OCwzNzIuNzM3LDE1Ni40NzggTTQyNS4y%0D%0ANDcsNzQuODU3aC01LjY5OWgtNTUuMmgtNS43MDFsLTEuODYsNS4zOWwtMzkuNzQsMTE1LjE0MWwt%0D%0AMy42NjIsMTAuNjEKICAgICAgaDExLjIyNWgzMy4zN2g1Ljg4OWwxLjc1LTUuNjIzbDMuNDYxLTEx%0D%0ALjEyMWw0Ni42MzIsMC4yMDdsMy41OTksMTEuNzc0bDEuNzIxLDUuNjI5bDUuODg3LDAuMDMzbDMy%0D%0ALjc3LDAuMThsMTEuMjk3LDAuMDYyCiAgICAgIGwtMy42OTEtMTAuNjc2bC00MC4xOC0xMTYuMjJM%0D%0ANDI1LjI0Nyw3NC44NTdMNDI1LjI0Nyw3NC44NTd6IE0zODMuODUxLDE0OC40NjRjMi40NjgtNy4w%0D%0AMjcsNS45MDQtMTYuNjU3LDkuMDE0LTI1LjMxMgogICAgICBjMi45NDgsOC42NDQsNi4yMDksMTgu%0D%0AMjQ1LDguNTg4LDI1LjI5TDM4My44NTEsMTQ4LjQ2NEwzODMuODUxLDE0OC40NjR6Ii8+CiAgICA8%0D%0AL2c+CiAgICA8Zz4KICAgICAgPHBhdGggZmlsbD0iI0ZGRTgxRiIgZD0iTTUzMi4zOTYsODIuODU3%0D%0AYzI1LjkyMSwwLDQzLjkxLDAuMzcsNDcuMzcsMC45N2M4LDEuMzksMTUuMjMsNS42NiwyMC42NSwx%0D%0AMi4yMgogICAgICBjNS42Nyw2Ljg2LDYuOTcsMTAuMTQsNy43MSwxOS41NGMxLjA2MSwxMy4yNy01%0D%0ALjI1LDI0LjcyLTE3LjcsMzIuMTVjLTMuNjMsMi4xNy03LjM1OSw0LjI4LTguMjksNC43CiAgICAg%0D%0AIGMtMS40MywwLjY1LTEuMjM5LDEuMjcsMS4zMiw0LjI3YzEuNjQ5LDEuOTMsNC41MSw0LjY4LDYu%0D%0AMzUsNi4xMWwzLjM2LDIuNjFsNjIuMDgsMC44OWwwLjYwOSwzMS42OGgtMzguMDYxCiAgICAgIGMt%0D%0AMjkuNDM5LDAtMzguODYtMC4yNy00MS42Mi0xLjJjLTQuMTMtMS40LTE0LjA2OS05LjgyLTM0LjI3%0D%0AMS0yOS4wNGwtMTQuNDItMTMuNzJsMC4xNTIsNDMuOTZoLTM3LjA0M1Y4Mi44NTdINTMyLjM5Ngog%0D%0AICAgICBNNTI2LjkzOCwxMzQuNjI3aDE5LjY3MWMxOS4xNDEsMCwxOS43MzktMC4wNiwyMi40Ny0y%0D%0ALjExYzQuODgxLTMuNjYsNi42MDktNy40Myw2LjA5MS0xMy4yMmMtMC41My01Ljk3LTIuODMtOS4w%0D%0AOC04LjYwMS0xMS41OAogICAgICBjLTMuMjUtMS40Mi02LjM4MS0xLjY1LTIxLjcyMS0xLjY1aC0x%0D%0ANy45MVYxMzQuNjI3IE01MzIuMzk2LDc0Ljg1N2gtNDEuOGgtOHY4djExNS4xNHY4aDhoMzcuMDQz%0D%0AaDguMDI4bC0wLjAyOC04LjAyOAogICAgICBsLTAuMDg4LTI1LjIxNmwwLjg0LDAuNzk5YzI0Ljk4%0D%0ANiwyMy43NzMsMzIuMzU2LDI5LjE3MywzNy4yMTgsMzAuODIxYzMuNzMzLDEuMjU5LDkuOTgyLDEu%0D%0ANjI0LDQ0LjE4OCwxLjYyNGgzOC4wNjFoOC4xNTQKICAgICAgbC0wLjE1Ni04LjE1NGwtMC42MDkt%0D%0AMzEuNjhsLTAuMTQ4LTcuNzM0bC03LjczNC0wLjExMWwtNTkuNDAyLTAuODUxbC0xLjI0NS0wLjk2%0D%0AN2MtMC4zOTYtMC4zMDktMC44NzYtMC43MTctMS4zODktMS4xNzkKICAgICAgYzAuNDQ2LTAuMjY0%0D%0ALDAuODU0LTAuNTA3LDEuMjA3LTAuNzE3YzE1LjAwMy04Ljk1MywyMi44NjYtMjMuNDA3LDIxLjU2%0D%0AOS0zOS42NTNjLTAuODYzLTEwLjk1OS0yLjgyLTE1Ljg5Ni05LjUyLTI0CiAgICAgIGMtNi41ODQt%0D%0ANy45NjktMTUuNjIxLTEzLjI5OC0yNS40NDctMTUuMDA1QzU3NS42NzgsNzQuOTk5LDU0OC4yNTcs%0D%0ANzQuODU3LDUzMi4zOTYsNzQuODU3TDUzMi4zOTYsNzQuODU3eiBNNTM0LjkzOCwxMTQuMDY3aDku%0D%0AOTEKICAgICAgYzE0LjAyNywwLDE2LjgwNiwwLjIzMywxOC41MTgsMC45ODFjMy4yNSwxLjQwOCwz%0D%0ALjU4LDIuMDkxLDMuODM1LDQuOTU3YzAuMjU2LDIuODQ4LTAuMDk3LDMuOTk0LTIuOTIyLDYuMTEy%0D%0ACiAgICAgIGMtMC4wOTMsMC4wNjktMC4xNjQsMC4xMjMtMC4yMjMsMC4xNjZjLTEuODY1LDAuMzQ1%0D%0ALTguNzg2LDAuMzQ1LTE3LjQ0NywwLjM0NWgtMTEuNjdMNTM0LjkzOCwxMTQuMDY3TDUzNC45Mzgs%0D%0AMTE0LjA2N3oiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg=="/>
        </section>
        <div id="board">  
          <div id="content">
            <p id="title">React Wars</p>
            <p id="subtitle">THE CODER'S MENACE</p>
            <br />
            {this.state.starwarsChars.map(char => {
              return <p key={char.created}>{char.name}</p>
            })}
            {/* <CharacterList 
              characters={this.state.starwarsChars}
            /> */}
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
