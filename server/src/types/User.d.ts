export default interface User {
  username: string;
  playtests?: Playtest[];
  save: () => void;
}
