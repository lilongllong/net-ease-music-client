# net-ease-music-pc
react + redux + es7 实现网易云音乐pc简化版

## 技术
- react
- redux
- webpack
- node
- es7
- less

## state tree design

state
- searchState
-

## web html design
- header
    - logo
    - call back btn
    - search
    - user
- main
    - slider
        - playlist
        - playedTrack content
    - content
        - album view
        - tracklist
- footer
    - player

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
- [api](https://github.com/yanunon/NeteaseCloudMusic/wiki/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90API%E5%88%86%E6%9E%90);
- [api](http://moonlib.com/606.html);
- [api](http://www.telstatic.xyz/wordpress/?p=6);


## more
// <div>
//     // <Header />
// </div>
// <main>
//     <div className="silder">
//         playlist + drag operation
//         <PlaylistContainer />
//     </div>
//     <div className="content">
//         tracklist + drag operation + player operation
//         <TracklistContainer />
//     </div>
// </main>
// <footer>
//     player
//     <PlayerContainer />
// </footer>
