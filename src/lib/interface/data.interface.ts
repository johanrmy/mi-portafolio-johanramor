export interface LocalData {
  page: Page;
  header: Header;
  aboutme: Aboutme;
  projects: Projects;
  divider: Divider[];
}

export interface Aboutme {
  title: string;
  info: string;
  developments: Development[];
}

export interface Development {
  title: string;
  tools_title: string;
  tools: string[];
  iconref: string;
}

export interface Divider {
  site: string;
  datum: Datum[];
}

export interface Datum {
  id: string;
  value: string;
}

export interface Header {
  title: Title;
  cartoon: Cartoon;
}

export interface Cartoon {
  url: string;
  alt: string;
}

export interface Title {
  name: string;
  career: string;
}

export interface Page {
  metadata: Metadata;
  sections: Section[];
  socialmedia: Socialmedia[];
}

export interface Metadata {
  title: string;
  description: string;
}

export interface Section {
  id: string;
  name: string;
}

export interface Socialmedia {
  id: string;
  smref: string;
  url: string;
}

export interface Projects {
  title: string;
  info: string;
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  repositorio: string;
  website: string;
  resources: Resources;
  stack: Stack[];
}

export interface Resources {
  tag: string;
  media: string[];
}

export interface Stack {
  name: string;
  color: string;
  iconref: string;
}
