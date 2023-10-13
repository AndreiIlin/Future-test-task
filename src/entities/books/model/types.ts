import { TBooksCategories, TBooksOrder } from 'entities/books-filters';

interface IBookInfo {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate: string;
  description?: string;
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  pageCount: number;
  dimensions?: {
    height: string;
    width: string;
    thickness: string;
  },
  printType: string;
  mainCategory?: string;
  categories?: string[];
  averageRating: number;
  ratingsCount?: number;
  contentVersion: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  },
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface IBookSaleInfo {
  country: string;
  saleability?: string;
  onSaleDate?: string;
  isEbook: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  },
  retailPrice?: {
    amount: number;
    currencyCode: string;
  }
  buyLink: string;
}

interface IBookAccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
  }
  pdf: {
    isAvailable: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
  },
  webReaderLink: string;
  accessViewStatus: string;
  downloadAccess?: {
    kind: string;
    volumeId: string;
    restricted: boolean;
    deviceAllowed: boolean;
    justAcquired: boolean;
    maxDownloadDevices: number;
    downloadsAcquired: number;
    nonce: string;
    source: string;
    reasonCode: string;
    message: string;
    signature: string;
  }
}

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IBookInfo;
  saleInfo: IBookSaleInfo;
  accessInfo: IBookAccessInfo;
  searchInfo?: {
    textSnippet: string;
  };
}

export interface IGetBooksRequest {
  startIndex: number;
  search: string;
  category: TBooksCategories;
  order: TBooksOrder;
}

export interface IGetBookRequest {
  id: string;
}

export interface IGetBooksResponse {
  items: IBook[];
  kind: string;
  totalItems: number;
}

export interface IBooksInitialState {
  books: IBook[];
  book: IBook | null;
  totalItems: number;
  isLoading: boolean;
  isError: boolean;
}
