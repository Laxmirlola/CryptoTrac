export function startMockWebSocket(dispatch, updateAsset) {
  setInterval(() => {
    const randomId = Math.floor(Math.random() * 2) + 1;
    const randomPercentChange = (Math.random() * 2 - 1).toFixed(2);
    const randomVolumeChange = (Math.random() * 50000000).toFixed(0);

    dispatch(
      updateAsset({
        id: randomId,
        changes: {
          price: parseFloat((Math.random() * 100000).toFixed(2)),
          change1h: parseFloat(randomPercentChange),
          change24h: parseFloat(randomPercentChange),
          volume24h: parseFloat(randomVolumeChange),
        },
      })
    );
  }, 1500); // 1.5 seconds
}
