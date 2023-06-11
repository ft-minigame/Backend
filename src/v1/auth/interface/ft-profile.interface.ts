export interface FtProfileInterface {
  id: number; //2;
  email: string; // 'andre@42.fr';
  login: string; // 'andre';
  first_name: string; // 'André';
  last_name: string; //'Aubin';
  usual_full_name: string; //'Juliette Aubin';
  usual_first_name: string; //'Juliette';
  url: string; //'https://api.intra.42.fr/v2/users/andre';
  phone?: any; // null;
  displayname: string; //'André Aubin';
  kind: string; //'admin';
  image: {
    link: string; //'https://cdn.intra.42.fr/users/1234567890/andre.jpg';
    versions: {
      large: string; //'https://cdn.intra.42.fr/users/1234567890/large_andre.jpg';
      medium: string; //'https://cdn.intra.42.fr/users/1234567890/medium_andre.jpg';
      small: string; //'https://cdn.intra.42.fr/users/1234567890/small_andre.jpg';
      micro: string; //'https://cdn.intra.42.fr/users/1234567890/micro_andre.jpgg';
    };
  };
  wallet: number; // 0;
  cursus_users: [];
}
