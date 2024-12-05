# Description
**Ogcisum** is a cross-platform mobile app for music sharing based on location providing a connection between online and offline music sharing. The users can see music shared in the pre-definied location when they are within 100 meters of the location.

<br>

# Features

1.View and share music through physical interaction.<br>
2. Play and interact with other user-generated music.<br>
3. Customised profile page.<br>

<br>

# Pages

## Map page

The map is implemented via the react-native-maps module
<div style="display: flex; width: 100%;">
<figure>
    <img
    src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdacdf3bc-49aa-4a75-b475-256ddf23cd87%2FHow_Should_the_App_Look__Function.003.png?table=block&id=32d3f4ab-6a07-4314-b199-903b8342ef9e&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=1420&userId=&cache=v2"> 
    <figcaption>Map page: When there's no music nearby<figcaption>
</figure>
<br><br><br>
<figure>
    <img
    src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F417ee4d3-1c12-4a7b-aca2-d935bde3f53b%2FHow_Should_the_App_Look__Function.001.png?table=block&id=333ed7db-974a-44f9-871a-3f2c0e0be5a6&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=2000&userId=&cache=v2"
    >
    <figcaption>Map page: When there's music nearby<figcaption>
</figure>
<br>
</div>

</br>

- View the pre-defined locations represented by purple circles.
    - Each location has a radius of 100 meters and the pre-defined locations & the user’s current location is calculated via the Geolib module.
<br><br><br>

## Now Playing page

<div style="display: flex; width: 100%;">
<figure>
    <img
    src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3193555-37c9-4928-b80a-0d1f493bbe9d%2FHow_Should_the_App_Look__Function.004.png?table=block&id=b37681f3-cd96-4294-9653-2b12c2809273&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=2000&userId=&cache=v2"> 
    <figcaption>Now Playing page: When there's no music nearby<figcaption>
</figure>
<br><br><br>
<figure>
    <img
    src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F417ee4d3-1c12-4a7b-aca2-d935bde3f53b%2FHow_Should_the_App_Look__Function.001.png?table=block&id=333ed7db-974a-44f9-871a-3f2c0e0be5a6&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=1420&userId=&cache=v2"
    >
    <figcaption>Now Playing page: When there's music nearby<figcaption>
</figure>
<br>
</div>

</br>

- Play/Stop music shared with the location by clicking the `Play button`.
- See profile picture and profile name.

<br>

## Profile page

<div style="display: flex; width: 100%;">
<figure>
    <img
    src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F382612cd-39c1-4223-a31d-e2c2729568f3%2FHow_Should_the_App_Look__Function.005.png?table=block&id=192638f3-680f-4ebc-ac47-4bb7d9b5ce1e&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=1420&userId=&cache=v2"> 
    <figcaption>Profile page: default status<figcaption>
</figure>
<br><br><br>
<figure>
    <img
  src="https://mattluscombe.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe20e0b80-8a0a-4725-a7e8-46772fe81559%2FHow_Should_the_App_Look__Function.006.png?table=block&id=95d8ec1a-b2d5-4a17-8348-e260ae0d8ff1&spaceId=3a1e6697-269f-42da-bfc5-96b033e213cf&width=1420&userId=&cache=v2"
      > 
    <figcaption>Profile page: When profile picture and name are added<figcaption>
</figure>
<br>
</div>
</br>
