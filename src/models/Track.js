const track = spotifyTrack => {
  const artists = spotifyTrack.artists.map(artistInfo => {
    return artistInfo.name;
  });

  const convertTrackDuration = spotifyTrack.duration_ms / 1000;

  return {
    key: spotifyTrack.uri,
    songImage: spotifyTrack.album.images[0].url,
    name: spotifyTrack.name,
    artistNames: artists,
    albumName: spotifyTrack.album.name,
    trackDuration: convertTrackDuration
  };
};

export default track;
