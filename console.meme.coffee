(->
  console.meme = (meme, top, bottom, size=160, consoleFontSize=12) ->
    console.log "%c #{Array(Math.ceil(size/consoleFontSize)).join '\n'} %c %c ",
      "background: none;",
      """
      background-image: url('http://lit-atoll-9603.herokuapp.com/api/v1/#{meme}/#{size}/#{encodeURIComponent(top)}/#{encodeURIComponent(bottom)}');
      background-repeat: no-repeat;
      background-position: center center;
      margin-bottom: #{size}px;
      padding: #{size}px #{size}px 0 0;
      background-size: 103%;
      """,
      "background: none;"
).call this
