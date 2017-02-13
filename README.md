# net-ease-music-pc
react + redux + es7 + nodejs 实现网易云音乐mac pc版

## 技术
- react
- redux
- webpack
- nodejs
- es7
- less
- babel

## state tree design

state
    |_ commonState
        |_ viewState
            |_ playShow
            |_ RecommendationShow
            |_ audioShow
            |_ playerSonglistShow
        |_ dataState
            |_ selectedSong <- play container
            |_ selectedSongType <- song container (type === viewState === audio hide other show)
            |_ playerSongList <- player container
            |_ selectedPlay <- play container
        |_ controllState
            |_ playerState: time, play

    |_ playlistContainerState
        |_ playlist
        |_ selectedType: recommendation, audio, play
        |_ selectedData
    |_ MainContainerState
        |_ state/commonState/viewState, state/commonState/dataState, state/commonState/controllState
        |_ PlayContainerState
            |_ state/commonState/dataState/[selectedSong, selectedSongType, playerSongList]
            |_ PlayInfo
            |_ tracklist
            |_ filterWord
        |_ audioContainerState
            |_ state/commonState/dataState/[selectedSong, selectedSongType, playerSongList]
            |_ state/commonState/controllState
        |_ RecommendationContainerState
            |_ state/commonState/viewState,
            |_ state/commonState/dataState/[selectedSong, selectedSongType, playerSongList]
            |_ state/commonState/dataState/[selectedPlay]
    |_ playerContainerState
        |_ state/commonState/viewState/playerSonglistShow, state/commonState/dataState,
            state/commonState/controllState
        |_ songlistState
        |_ songState
        |_ playControllState
    |_ headerContainerState
        |_ state/commonState/dataState/[selectedSong, selectedSongType, playerSongList]
        |_ searchValue
        |_ suggestionState

## container - component
App
|_ headerContainer
    |_ history Container // TODO
    |_ search Container|Component
        |_ SearchInput Component
        |_ Suggestion Component
    |_ user container // TODO
|_ contentContainer
    |_ playlist Container
        |_ playlist Component
    |_ play Container|Component
        |_ playinfo Component
        |_ tracklist Component
    |_ audio Container|Component
        |_ audioInfo Component
        |_ commment Component
    |_ recommandation Container|Component
        |_ playlist Component
        |_ songlist Component
|_ playerContainer|Component
    |_ song Component
    |_ playerControll Component
    |_ playerSonglist Component

## target
- auther login

- page callback
  - window.location.hash + window.location + state.location.url array

- playlist + panel's interaction // 之间的交互
  - playlist's add remove drag operation
  - playlist interact with panel, such as drag
  - playlist interact with player's tracklist

- player
    - song list
      - add remove drag operation
    -  remove history function
- cache
  - song resource cache ?

## api support
- [api](http://qianzewei.com/2015/12/10/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90api%E6%95%B4%E7%90%86/);
- [api](https://lophita.com/xiami-music-api.html);
- [api-下载文件尚未解析](https://github.com/yanunon/NeteaseCloudMusic/wiki/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90API%E5%88%86%E6%9E%90);
- [已解析-api](http://moonlib.com/606.html);



## more
