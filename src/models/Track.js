const track = spotifyTrack => {
  const artists = spotifyTrack.artists.map(artistInfo => {
    return artistInfo.name;
  });

  return {
    key: spotifyTrack.uri,
    songImage: spotifyTrack.album.images[0].url,
    name: spotifyTrack.name,
    artistNames: artists,
    albumName: spotifyTrack.album.name
  };
};

export default track;
