export interface TRoute {
    path: string;
    element: JSX.Element;
  }
 export interface TUserPath {
    path?: string;
    element?: JSX.Element;
    children?: TUserPath[];
    role: ('user' | 'admin')[];
  }
    