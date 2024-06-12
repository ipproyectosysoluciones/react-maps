

export const getUserLocation = async (): Promise<[ number, number ]> => {
  
  return new Promise(( resolve, rejects ) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([ coords.longitude, coords.latitude ]);
      },
      ( error ) => {
        alert( 'No se pudo obtener la geolocalización' );
        console.log( error );
        rejects();
      }
    );
  });
};
