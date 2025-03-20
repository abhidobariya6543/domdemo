export type Section = {
  type: string;
  content?: string;
  paragraphs?: string[];
  items?: string[];
  spacer?: string
}

export interface PageContent {
  title?: string;
  lastUpdated?: string;
  sections?: Section[];
}
