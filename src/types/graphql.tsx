export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Binary: any;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  DatetimeIso8601: any;
  Integer: any;
  Map: any;
  Timespan: any;
  /**
   * The `Int` scalar type represents non-fractional signed whole numeric
   * values. Int can represent values between -(2^31) and 2^31 - 1.
   */
  Timestamp: any;
  Upload: any;
};



/** The 'Custom block' entity type. */
export type BlockContent = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Custom block' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The custom block ID. */
  id?: Maybe<Scalars['Int']>;
  /** The custom block UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The revision ID. */
  revisionId?: Maybe<Scalars['Int']>;
  /** The custom block language code. */
  langcode?: Maybe<FieldBlockContentLangcode>;
  /** The block type. */
  type?: Maybe<FieldBlockContentType>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldBlockContentRevisionUser>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A brief description of your block. */
  info?: Maybe<Scalars['String']>;
  /** The time that the custom block was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A boolean indicating whether this block is reusable. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The block type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom block' entity type. */
export type BlockContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Custom block' entity type. */
export type BlockContentEntityRenderedArgs = {
  mode?: Maybe<BlockContentDisplayModeId>;
};


/** The 'Custom block' entity type. */
export type BlockContentQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom block' entity type. */
export type BlockContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasic = BlockContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'BlockContentBasic';
  /** Renders 'Custom block' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The custom block ID. */
  id?: Maybe<Scalars['Int']>;
  /** The custom block UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The revision ID. */
  revisionId?: Maybe<Scalars['Int']>;
  /** The custom block language code. */
  langcode?: Maybe<FieldBlockContentLangcode>;
  /** The block type. */
  type?: Maybe<FieldBlockContentType>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldBlockContentRevisionUser>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A brief description of your block. */
  info?: Maybe<Scalars['String']>;
  /** The time that the custom block was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A boolean indicating whether this block is reusable. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The block type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldBlockContentBasicBody>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityRenderedArgs = {
  mode?: Maybe<BlockContentDisplayModeId>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Basic block' bundle of the 'Custom block' entity type. */
export type BlockContentBasicEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The available display modes for 'Custom block' entities. */
export enum BlockContentDisplayModeId {
  /** The 'Full' display mode for 'Custom block' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'Custom block' entities. */
  Token = 'TOKEN'
}

/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlock = BlockContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'BlockContentReferenceBlock';
  /** Renders 'Custom block' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The custom block ID. */
  id?: Maybe<Scalars['Int']>;
  /** The custom block UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The revision ID. */
  revisionId?: Maybe<Scalars['Int']>;
  /** The custom block language code. */
  langcode?: Maybe<FieldBlockContentLangcode>;
  /** The block type. */
  type?: Maybe<FieldBlockContentType>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldBlockContentRevisionUser>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A brief description of your block. */
  info?: Maybe<Scalars['String']>;
  /** The time that the custom block was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A boolean indicating whether this block is reusable. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The block type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  fieldReferencedContent?: Maybe<FieldBlockContentReferenceBlockFieldReferencedContent>;
  /** Query reference:  */
  queryFieldReferencedContent?: Maybe<EntityQueryResult>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityRenderedArgs = {
  mode?: Maybe<BlockContentDisplayModeId>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Reference block' bundle of the 'Custom block' entity type. */
export type BlockContentReferenceBlockQueryFieldReferencedContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Block' entities. */
export enum BlockDisplayModeId {
  /** The 'Token' display mode for 'Block' entities. */
  Token = 'TOKEN'
}

export type ConstraintViolation = {
  __typename?: 'ConstraintViolation';
  path?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

/** The 'Crop' entity type. */
export type Crop = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityRevisions: EntityQueryResult;
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Crop' entity type. */
export type CropEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Crop' entity type. */
export type CropEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Crop' entity type. */
export type CropEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Crop' entity type. */
export type CropEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Crop' entity type. */
export type CropQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Crop' entity type. */
export type CropQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPoint = Crop & Entity & EntityRevisionable & {
  __typename?: 'CropFocalPoint';
  /** The crop ID. */
  cid?: Maybe<Scalars['Int']>;
  /** The crop UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The crop revision ID. */
  vid?: Maybe<Scalars['Int']>;
  /** The crop type. */
  type?: Maybe<FieldCropType>;
  /** The node language code. */
  langcode?: Maybe<FieldCropLangcode>;
  /** The URI of the image crop belongs to. */
  uri?: Maybe<Scalars['String']>;
  /** The crop height. */
  height?: Maybe<Scalars['Int']>;
  /** The crop width. */
  width?: Maybe<Scalars['Int']>;
  /** The crop's X coordinate. */
  x?: Maybe<Scalars['Int']>;
  /** The crop's Y coordinate. */
  y?: Maybe<Scalars['Int']>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldCropRevisionUid>;
  /** The log entry explaining the changes in this revision. */
  revisionLog?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The crop type. */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** ID of entity crop belongs to. */
  entityIdOfCrop?: Maybe<Scalars['Int']>;
  /** The type of entity crop belongs to. */
  entityTypeOfCrop?: Maybe<Scalars['String']>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityRevisions: EntityQueryResult;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Focal point' bundle of the 'Crop' entity type. */
export type CropFocalPointEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};





export type DefaultInternalUrl = InternalUrl & Url & {
  __typename?: 'DefaultInternalUrl';
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
};


export type DefaultInternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


export type DefaultInternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


export type DefaultInternalUrlTranslateArgs = {
  language: LanguageId;
};

/** Common entity interface containing generic entity properties. */
export type Entity = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityTranslationArgs = {
  language: LanguageId;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common entity interface containing generic entity properties. */
export type EntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

/** The canonical entity url. */
export type EntityCanonicalUrl = InternalUrl & Url & {
  __typename?: 'EntityCanonicalUrl';
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The entity belonging to the current url. */
  entity?: Maybe<Entity>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


/** The canonical entity url. */
export type EntityCanonicalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};


/** The canonical entity url. */
export type EntityCanonicalUrlTranslateArgs = {
  language: LanguageId;
};

export type EntityCrudOutput = {
  __typename?: 'EntityCrudOutput';
  entity?: Maybe<Entity>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  violations?: Maybe<Array<Maybe<ConstraintViolation>>>;
};

/** Common interface for entities that are describable. */
export type EntityDescribable = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityDescription?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are describable. */
export type EntityDescribableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntity = Entity & {
  __typename?: 'EntityEmbedFakeEntity';
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
};


/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntityEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Fake entity type' entity type. */
export type EntityEmbedFakeEntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

/** Common interface for entities that have a owner. */
export type EntityOwnable = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityOwner?: Maybe<User>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that have a owner. */
export type EntityOwnableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

/** Common interface for entities that are publishable. */
export type EntityPublishable = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are publishable. */
export type EntityPublishableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

export enum EntityQueryBundleMode {
  /** Loads only entities that share the same bundle with the parent entity. */
  Same = 'SAME',
  /** Loads entities across all bundles. */
  All = 'ALL'
}

export type EntityQueryFilterConditionInput = {
  field: Scalars['String'];
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator?: Maybe<QueryOperator>;
  language?: Maybe<LanguageId>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type EntityQueryFilterInput = {
  conditions?: Maybe<Array<Maybe<EntityQueryFilterConditionInput>>>;
  groups?: Maybe<Array<Maybe<EntityQueryFilterInput>>>;
  conjunction?: Maybe<QueryConjunction>;
};

/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResult = {
  __typename?: 'EntityQueryResult';
  count?: Maybe<Scalars['Int']>;
  entities?: Maybe<Array<Maybe<Entity>>>;
};


/** Wrapper type for entity query results containing the list of loaded entities and the full entity count for pagination purposes. */
export type EntityQueryResultEntitiesArgs = {
  language?: Maybe<LanguageId>;
};

export enum EntityQueryRevisionMode {
  /** Loads the current (default) revisions. */
  Default = 'DEFAULT',
  /** Loads all revisions. */
  All = 'ALL',
  /** Loads latest revision. */
  Latest = 'LATEST'
}

export type EntityQuerySortInput = {
  field: Scalars['String'];
  direction?: Maybe<SortOrder>;
  language?: Maybe<LanguageId>;
};

/** Common interface for entities that are revisionable. */
export type EntityRevisionable = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityRevisions: EntityQueryResult;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityTranslationArgs = {
  language: LanguageId;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for entities that are revisionable. */
export type EntityRevisionableEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ExternalResponse = {
  __typename?: 'ExternalResponse';
  code?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};


export type ExternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

export type ExternalUrl = Url & {
  __typename?: 'ExternalUrl';
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  request?: Maybe<ExternalResponse>;
};


export type ExternalUrlTranslateArgs = {
  language: LanguageId;
};

export type FieldBlockContentBasicBody = {
  __typename?: 'FieldBlockContentBasicBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/** The custom block language code. */
export type FieldBlockContentLangcode = {
  __typename?: 'FieldBlockContentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldBlockContentReferenceBlockFieldReferencedContent = {
  __typename?: 'FieldBlockContentReferenceBlockFieldReferencedContent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The user ID of the author of the current revision. */
export type FieldBlockContentRevisionUser = {
  __typename?: 'FieldBlockContentRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The block type. */
export type FieldBlockContentType = {
  __typename?: 'FieldBlockContentType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The node language code. */
export type FieldCropLangcode = {
  __typename?: 'FieldCropLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the author of the current revision. */
export type FieldCropRevisionUid = {
  __typename?: 'FieldCropRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The crop type. */
export type FieldCropType = {
  __typename?: 'FieldCropType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The file language code. */
export type FieldFileLangcode = {
  __typename?: 'FieldFileLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user ID of the file. */
export type FieldFileUid = {
  __typename?: 'FieldFileUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The URI to access the file (either local or remote). */
export type FieldFileUri = {
  __typename?: 'FieldFileUri';
  value?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FieldMediaBundle = {
  __typename?: 'FieldMediaBundle';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

export type FieldMediaFileFieldMediaFile = {
  __typename?: 'FieldMediaFileFieldMediaFile';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Flag to control whether this file should be displayed when viewing content */
  display?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

/**
 * <big><b>Accessibility notes:</b></big>
 * <p>If a <i>Title</i> field is entered, it will be displayed as a visible caption. Both <i>Title</i> and <i>Alt</i> will be read by screen readers. For example, given the following fields:</p>
 * <code><p><b>Title:</b> "Cornell University was founded in 1865."<br><b>Alt:</b> "Flowering trees beside the main entrance to Day Hall"</p></code>
 * <p>A screen reader will recite: "Flowering trees beside the main entrance to Day Hall. Caption: Cornell University was founded in 1865."</p>
 */
export type FieldMediaGalleryImageFieldMediaImage = {
  __typename?: 'FieldMediaGalleryImageFieldMediaImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


/**
 * <big><b>Accessibility notes:</b></big>
 * <p>If a <i>Title</i> field is entered, it will be displayed as a visible caption. Both <i>Title</i> and <i>Alt</i> will be read by screen readers. For example, given the following fields:</p>
 * <code><p><b>Title:</b> "Cornell University was founded in 1865."<br><b>Alt:</b> "Flowering trees beside the main entrance to Day Hall"</p></code>
 * <p>A screen reader will recite: "Flowering trees beside the main entrance to Day Hall. Caption: Cornell University was founded in 1865."</p>
 */
export type FieldMediaGalleryImageFieldMediaImageDerivativeArgs = {
  style: ImageStyleId;
};

/**
 * Long description for making certain technical/complex images compliant with web accessibility criteria.<br>
 * Visibly hidden, used by screen readers via <code>aria-describedby</code>.<br />
 * <big><strong>If you use this field, you MUST enter alt text for the image.</strong> </big> Otherwise, the image itself will ignored by assistive technology (as "decorative"), and the aria-describedby value will not be provided to users.
 */
export type FieldMediaImageFieldAriaDescription = {
  __typename?: 'FieldMediaImageFieldAriaDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldMediaImageFieldMediaImage = {
  __typename?: 'FieldMediaImageFieldMediaImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


export type FieldMediaImageFieldMediaImageDerivativeArgs = {
  style: ImageStyleId;
};

export type FieldMediaLangcode = {
  __typename?: 'FieldMediaLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldMediaPath = {
  __typename?: 'FieldMediaPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** The user ID of the author of the current revision. */
export type FieldMediaRevisionUser = {
  __typename?: 'FieldMediaRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The thumbnail of the media item. */
export type FieldMediaThumbnail = {
  __typename?: 'FieldMediaThumbnail';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


/** The thumbnail of the media item. */
export type FieldMediaThumbnailDerivativeArgs = {
  style: ImageStyleId;
};

/** The user ID of the author. */
export type FieldMediaUid = {
  __typename?: 'FieldMediaUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The menu link language code. */
export type FieldMenuLinkContentLangcode = {
  __typename?: 'FieldMenuLinkContentLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The location this menu link points to. */
export type FieldMenuLinkContentLink = {
  __typename?: 'FieldMenuLinkContentLink';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


/** The location this menu link points to. */
export type FieldMenuLinkContentLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The user ID of the author of the current revision. */
export type FieldMenuLinkContentRevisionUser = {
  __typename?: 'FieldMenuLinkContentRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldNodeEventBody = {
  __typename?: 'FieldNodeEventBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

export type FieldNodeEventFieldAttachments = {
  __typename?: 'FieldNodeEventFieldAttachments';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Flag to control whether this file should be displayed when viewing content */
  display?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

export type FieldNodeEventFieldDestinationUrl = {
  __typename?: 'FieldNodeEventFieldDestinationUrl';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


export type FieldNodeEventFieldDestinationUrlAttributeArgs = {
  key: Scalars['String'];
};

export type FieldNodeEventFieldEventDate = {
  __typename?: 'FieldNodeEventFieldEventDate';
  value?: Maybe<Scalars['String']>;
  /** The computed DateTime object. */
  date?: Maybe<Scalars['Any']>;
};

export type FieldNodeEventFieldEventDateEnd = {
  __typename?: 'FieldNodeEventFieldEventDateEnd';
  value?: Maybe<Scalars['String']>;
  /** The computed DateTime object. */
  date?: Maybe<Scalars['Any']>;
};

export type FieldNodeEventFieldEventImage = {
  __typename?: 'FieldNodeEventFieldEventImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


export type FieldNodeEventFieldEventImageDerivativeArgs = {
  style: ImageStyleId;
};

export type FieldNodeEventFieldShortDescription = {
  __typename?: 'FieldNodeEventFieldShortDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldNodeEventFieldTags = {
  __typename?: 'FieldNodeEventFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldNodeGalleryBody = {
  __typename?: 'FieldNodeGalleryBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/**
 * Hint: Video content can be mixed with images in a single gallery, though it's worth considering what the best experience will be for visitors. Perhaps separate image and video galleries would be more intuitive, and allow visitors to choose the content that suits their interests or viewing environment.<br><br>
 * <big><b>Accessibility notes:</b></big>
 * <p>If a <i>Title</i> field is entered, it will be displayed as a visible caption. Both <i>Title</i> and <i>Alt</i> will be read by screen readers. For example, given the following fields:</p>
 * <code><p><b>Title:</b> "Cornell University was founded in 1865."<br><b>Alt:</b> "Flowering trees beside the main entrance to Day Hall"</p></code>
 * <p>A screen reader will recite: "Flowering trees beside the main entrance to Day Hall. Caption: Cornell University was founded in 1865."</p>
 */
export type FieldNodeGalleryFieldGalleryMedia = {
  __typename?: 'FieldNodeGalleryFieldGalleryMedia';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeLangcode = {
  __typename?: 'FieldNodeLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** Computed menu link for the node (only available during node saving). */
export type FieldNodeMenuLink = {
  __typename?: 'FieldNodeMenuLink';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<MenuLinkContent>;
};

export type FieldNodeNewsBody = {
  __typename?: 'FieldNodeNewsBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/** Adding a site link or web address to this field will cause listings for this News item to <b>link to another page instead of to the News item itself</b>. If this field is left blank, the listing will simply link to the News item, showing the full Body content entered below. */
export type FieldNodeNewsFieldDestinationUrl = {
  __typename?: 'FieldNodeNewsFieldDestinationUrl';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


/** Adding a site link or web address to this field will cause listings for this News item to <b>link to another page instead of to the News item itself</b>. If this field is left blank, the listing will simply link to the News item, showing the full Body content entered below. */
export type FieldNodeNewsFieldDestinationUrlAttributeArgs = {
  key: Scalars['String'];
};

/**
 * <p>A featured image to represent this content in listings (and on the News item's full page, if one exists). The image provided will be used to generate thumbnails at various sizes.</p>
 * <p><b>Image Recommendations:</b></p>
 * <ul>
 * <li><code>This image should be a minimum of 480x480.</code></li>
 * <li><code>If a full page exists for this News item, the featured image should be a minimum of 832x520.</code></li>
 * <li><code>When editing an image in Drupal, drag the crosshair icon (<big>+</big>) to the most important region of the image, to make it more prominent in cropped thumbnails.</code></li>
 * </ul>
 */
export type FieldNodeNewsFieldImage = {
  __typename?: 'FieldNodeNewsFieldImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeNewsFieldPostDate = {
  __typename?: 'FieldNodeNewsFieldPostDate';
  value?: Maybe<Scalars['String']>;
  /** The computed DateTime object. */
  date?: Maybe<Scalars['Any']>;
};

export type FieldNodeNewsFieldTags = {
  __typename?: 'FieldNodeNewsFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** A summary of around 300 characters or fewer, commonly present in listings and teasers. This text should usually be a single paragraph and not include HTML markup. However, it can accommodate links and light formatting of text if needed. */
export type FieldNodeNewsFieldTeaser = {
  __typename?: 'FieldNodeNewsFieldTeaser';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldNodePageBody = {
  __typename?: 'FieldNodePageBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

export type FieldNodePageFieldAttachedView = {
  __typename?: 'FieldNodePageFieldAttachedView';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced view */
  entity?: Maybe<Entity>;
  /** The view display ID */
  displayId?: Maybe<Scalars['String']>;
  /** An optional comma-delimited list of arguments for the display */
  arguments?: Maybe<Scalars['String']>;
  /** Override the number of displayed items. */
  itemsToDisplay?: Maybe<Scalars['String']>;
};

export type FieldNodePageFieldBannerImage = {
  __typename?: 'FieldNodePageFieldBannerImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** Include an embedded media gallery at the bottom of the main page content. */
export type FieldNodePageFieldGallery = {
  __typename?: 'FieldNodePageFieldGallery';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** Include an embedded carousel at the bottom of the main page content. On the homepage, it will instead display in the site header. */
export type FieldNodePageFieldSlider = {
  __typename?: 'FieldNodePageFieldSlider';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

export type FieldNodePath = {
  __typename?: 'FieldNodePath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/**
 * This field is used for an optional bio, as well as areas of expertise, CBB Projects, etc.<br />
 * <strong>EITHER</strong> use this field OR the <em>External bio link</em>  field.
 */
export type FieldNodePersonBody = {
  __typename?: 'FieldNodePersonBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/** <strong>EITHER</strong> use this field OR the <em>Bio text</em> field. */
export type FieldNodePersonFieldDestinationUrl = {
  __typename?: 'FieldNodePersonFieldDestinationUrl';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


/** <strong>EITHER</strong> use this field OR the <em>Bio text</em> field. */
export type FieldNodePersonFieldDestinationUrlAttributeArgs = {
  key: Scalars['String'];
};

/** TO DO: help text */
export type FieldNodePersonFieldImage = {
  __typename?: 'FieldNodePersonFieldImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** TO DO: help text */
export type FieldNodePersonFieldPersonRef = {
  __typename?: 'FieldNodePersonFieldPersonRef';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Node>;
};

/** The user ID of the author of the current revision. */
export type FieldNodeRevisionUid = {
  __typename?: 'FieldNodeRevisionUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldNodeSlideshowFieldSlides = {
  __typename?: 'FieldNodeSlideshowFieldSlides';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity revision */
  entity?: Maybe<Paragraph>;
  targetRevisionId?: Maybe<Scalars['Int']>;
};

export type FieldNodeSpotlightBody = {
  __typename?: 'FieldNodeSpotlightBody';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** The summary text with the text format applied. */
  summaryProcessed?: Maybe<Scalars['String']>;
};

/** Adding a site link or web address to this field will cause listings for this Spotlight to <b>link to another page instead of to the Spotlight itself</b>. If this field is left blank, the listing will simply link to the Spotlight, showing the full Body content entered below. */
export type FieldNodeSpotlightFieldDestinationUrl = {
  __typename?: 'FieldNodeSpotlightFieldDestinationUrl';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


/** Adding a site link or web address to this field will cause listings for this Spotlight to <b>link to another page instead of to the Spotlight itself</b>. If this field is left blank, the listing will simply link to the Spotlight, showing the full Body content entered below. */
export type FieldNodeSpotlightFieldDestinationUrlAttributeArgs = {
  key: Scalars['String'];
};

/**
 * <p>A featured image to represent this content in listings (and on the Spotlight's full page, if one exists). The image provided will be used to generate thumbnails at various sizes.</p>
 * <p><b>Image Recommendations:</b></p>
 * <ul>
 * <li><code>This image should be a minimum of 480x480.</code></li>
 * <li><code>If a full page exists for this Spotlight, the featured image should be a minimum of 832x520.</code></li>
 * <li><code>When editing an image in Drupal, drag the crosshair icon (<big>+</big>) to the most important region of the image, to make it more prominent in cropped thumbnails.</code></li>
 * </ul>
 */
export type FieldNodeSpotlightFieldImage = {
  __typename?: 'FieldNodeSpotlightFieldImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

export type FieldNodeSpotlightFieldPostDate = {
  __typename?: 'FieldNodeSpotlightFieldPostDate';
  value?: Maybe<Scalars['String']>;
  /** The computed DateTime object. */
  date?: Maybe<Scalars['Any']>;
};

export type FieldNodeSpotlightFieldTags = {
  __typename?: 'FieldNodeSpotlightFieldTags';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** A summary of around 300 characters or fewer, commonly present in listings and teasers. This text should usually be a single paragraph and not include HTML markup. However, it can accommodate links and light formatting of text if needed. */
export type FieldNodeSpotlightFieldTeaser = {
  __typename?: 'FieldNodeSpotlightFieldTeaser';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

export type FieldNodeType = {
  __typename?: 'FieldNodeType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The username of the content author. */
export type FieldNodeUid = {
  __typename?: 'FieldNodeUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The paragraphs entity language code. */
export type FieldParagraphLangcode = {
  __typename?: 'FieldParagraphLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldParagraphSlideshowSlideFieldMediaImage = {
  __typename?: 'FieldParagraphSlideshowSlideFieldMediaImage';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<Media>;
};

/** If filled in, the title and/or caption will be a clickable link. <code><b>Hint:</b> Requires a title and/or caption be present. If not, <i>Image alt text</i> should be provided.</code> */
export type FieldParagraphSlideshowSlideFieldSlideLink = {
  __typename?: 'FieldParagraphSlideshowSlideFieldSlideLink';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


/** If filled in, the title and/or caption will be a clickable link. <code><b>Hint:</b> Requires a title and/or caption be present. If not, <i>Image alt text</i> should be provided.</code> */
export type FieldParagraphSlideshowSlideFieldSlideLinkAttributeArgs = {
  key: Scalars['String'];
};

export type FieldParagraphType = {
  __typename?: 'FieldParagraphType';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

export type FieldPathAliasLangcode = {
  __typename?: 'FieldPathAliasLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The redirect language. */
export type FieldRedirectLanguage = {
  __typename?: 'FieldRedirectLanguage';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

export type FieldRedirectRedirectRedirect = {
  __typename?: 'FieldRedirectRedirectRedirect';
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['Map']>;
  url?: Maybe<Url>;
  attribute?: Maybe<Scalars['String']>;
};


export type FieldRedirectRedirectRedirectAttributeArgs = {
  key: Scalars['String'];
};

/** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
export type FieldRedirectRedirectSource = {
  __typename?: 'FieldRedirectRedirectSource';
  path?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['Map']>;
};

/** The user ID of the node author. */
export type FieldRedirectUid = {
  __typename?: 'FieldRedirectUid';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

export type FieldTaxonomyTermDescription = {
  __typename?: 'FieldTaxonomyTermDescription';
  value?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  /** The text with the text format applied. */
  processed?: Maybe<Scalars['String']>;
};

/** The term language code. */
export type FieldTaxonomyTermLangcode = {
  __typename?: 'FieldTaxonomyTermLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The parents of this term. */
export type FieldTaxonomyTermParent = {
  __typename?: 'FieldTaxonomyTermParent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

export type FieldTaxonomyTermPath = {
  __typename?: 'FieldTaxonomyTermPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** The user ID of the author of the current revision. */
export type FieldTaxonomyTermRevisionUser = {
  __typename?: 'FieldTaxonomyTermRevisionUser';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<User>;
};

/** The parents of this term. */
export type FieldTaxonomyTermTagsParent = {
  __typename?: 'FieldTaxonomyTermTagsParent';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<TaxonomyTerm>;
};

/** The vocabulary to which the term is assigned. */
export type FieldTaxonomyTermVid = {
  __typename?: 'FieldTaxonomyTermVid';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** The user language code. */
export type FieldUserLangcode = {
  __typename?: 'FieldUserLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The password of this user (hashed). */
export type FieldUserPass = {
  __typename?: 'FieldUserPass';
  value?: Maybe<Scalars['String']>;
  existing?: Maybe<Scalars['String']>;
  preHashed?: Maybe<Scalars['Boolean']>;
};

export type FieldUserPath = {
  __typename?: 'FieldUserPath';
  alias?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<Scalars['String']>;
  /** Whether an automated alias should be created or not. */
  pathauto?: Maybe<Scalars['Int']>;
};

/** The user's preferred language code for viewing administration pages. */
export type FieldUserPreferredAdminLangcode = {
  __typename?: 'FieldUserPreferredAdminLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The user's preferred language code for receiving emails and viewing the site. */
export type FieldUserPreferredLangcode = {
  __typename?: 'FieldUserPreferredLangcode';
  value?: Maybe<Scalars['String']>;
  /** The referenced language */
  language?: Maybe<Language>;
};

/** The roles the user has. */
export type FieldUserRoles = {
  __typename?: 'FieldUserRoles';
  targetId?: Maybe<Scalars['String']>;
  /** The referenced entity */
  entity?: Maybe<Entity>;
};

/** Your virtual face or picture. */
export type FieldUserUserPicture = {
  __typename?: 'FieldUserUserPicture';
  targetId?: Maybe<Scalars['Int']>;
  /** The referenced entity */
  entity?: Maybe<File>;
  /** Alternative image text, for the image's 'alt' attribute. */
  alt?: Maybe<Scalars['String']>;
  /** Image title text, for the image's 'title' attribute. */
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  derivative?: Maybe<ImageResource>;
  url?: Maybe<Scalars['String']>;
};


/** Your virtual face or picture. */
export type FieldUserUserPictureDerivativeArgs = {
  style: ImageStyleId;
};

/** The 'File' entity type. */
export type File = Entity & EntityOwnable & {
  __typename?: 'File';
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityOwner?: Maybe<User>;
  /** Renders 'File' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The file ID. */
  fid?: Maybe<Scalars['Int']>;
  /** The file UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The file language code. */
  langcode?: Maybe<FieldFileLangcode>;
  /** The user ID of the file. */
  uid?: Maybe<FieldFileUid>;
  /** Name of the file with no path components. */
  filename?: Maybe<Scalars['String']>;
  /** The URI to access the file (either local or remote). */
  uri?: Maybe<FieldFileUri>;
  /** The file's MIME type. */
  filemime?: Maybe<Scalars['String']>;
  /** The size of the file in bytes. */
  filesize?: Maybe<Scalars['Int']>;
  /** The status of the file, temporary (FALSE) and permanent (TRUE). */
  status?: Maybe<Scalars['Boolean']>;
  /** The timestamp that the file was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The timestamp that the file was last changed. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** Query reference: The user ID of the file. */
  queryUid?: Maybe<EntityQueryResult>;
  url?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'File' entity type. */
export type FileEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'File' entity type. */
export type FileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'File' entity type. */
export type FileEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'File' entity type. */
export type FileEntityRenderedArgs = {
  mode?: Maybe<FileDisplayModeId>;
};


/** The 'File' entity type. */
export type FileQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'File' entities. */
export enum FileDisplayModeId {
  /** The 'Token' display mode for 'File' entities. */
  Token = 'TOKEN'
}

export type ImageResource = {
  __typename?: 'ImageResource';
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export enum ImageStyleId {
  /** Article Banner (832x520) */
  Articlebanner = 'ARTICLEBANNER',
  /** Gallery Thumbnail (240x240) */
  Gallerythumbnail = 'GALLERYTHUMBNAIL',
  /** Large (800×800) */
  Large = 'LARGE',
  /** Thumbnail, Linkit Result (50x50) */
  Linkitresultthumbnail = 'LINKITRESULTTHUMBNAIL',
  /** Medium (480×480) */
  Medium = 'MEDIUM',
  /** Medium square (480x480) */
  Mediumsquare = 'MEDIUMSQUARE',
  /** Page Banner (1280×500) */
  Pagebannerimage = 'PAGEBANNERIMAGE',
  /** Drupal Core: Thumbnail (100×100) */
  Thumbnail = 'THUMBNAIL',
  /** Thumbnail, Entity Browser (386x200) */
  Viewsthumbnail = 'VIEWSTHUMBNAIL'
}


export type InternalResponse = {
  __typename?: 'InternalResponse';
  code?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};


export type InternalResponseHeaderArgs = {
  key?: Maybe<Scalars['String']>;
};

/** Common interface for internal urls. */
export type InternalUrl = {
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  breadcrumb?: Maybe<Array<Maybe<Link>>>;
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  languageSwitchLinks?: Maybe<Array<Maybe<LanguageSwitchLink>>>;
  blocksByRegion?: Maybe<Array<Maybe<Entity>>>;
  request?: Maybe<InternalResponse>;
  /** The url's path alias if any. */
  pathAlias?: Maybe<Scalars['String']>;
  /** The route's internal path. */
  pathInternal?: Maybe<Scalars['String']>;
};


/** Common interface for internal urls. */
export type InternalUrlTranslateArgs = {
  language: LanguageId;
};


/** Common interface for internal urls. */
export type InternalUrlLanguageSwitchLinksArgs = {
  language?: Maybe<LanguageId>;
};


/** Common interface for internal urls. */
export type InternalUrlBlocksByRegionArgs = {
  region: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  /** The weight of the language. */
  weight?: Maybe<Scalars['Int']>;
  /** The language direction (rtl or ltr). */
  direction?: Maybe<Scalars['String']>;
  /** Boolean indicating if this is the configured default language. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Boolean indicating if this language is locked. */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** The language id. */
  id?: Maybe<Scalars['String']>;
  /** The language id prepared as a language enum value. */
  argument?: Maybe<Scalars['String']>;
  /** The human-readable name of the language. */
  name?: Maybe<Scalars['String']>;
};

export enum LanguageId {
  /** English */
  En = 'EN'
}

export type LanguageSwitchLink = {
  __typename?: 'LanguageSwitchLink';
  active?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Language>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<InternalUrl>;
};

export type Link = {
  __typename?: 'Link';
  /** The url of a link. */
  url?: Maybe<Url>;
  /** The label of a link. */
  text?: Maybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type Media = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldBannerImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaImageParagraph: EntityQueryResult;
};


/** The 'Media' entity type. */
export type MediaEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Media' entity type. */
export type MediaEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Media' entity type. */
export type MediaEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Media' entity type. */
export type MediaEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Media' entity type. */
export type MediaEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Media' entity type. */
export type MediaEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Media' entity type. */
export type MediaQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldBannerImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldGalleryMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Media' entity type. */
export type MediaReverseFieldMediaImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Media' entities. */
export enum MediaDisplayModeId {
  /** The 'Article Banner' display mode for 'Media' entities. */
  Articlebanner = 'ARTICLEBANNER',
  /** The 'Full content' display mode for 'Media' entities. */
  Full = 'FULL',
  /** The 'Large' display mode for 'Media' entities. */
  Largesized = 'LARGESIZED',
  /** The 'TO DO: is this needed, or just the image style? Thumbnail, square' display mode for 'Media' entities. */
  Listingpagethumbnail = 'LISTINGPAGETHUMBNAIL',
  /** The 'Medium' display mode for 'Media' entities. */
  Mediumsized = 'MEDIUMSIZED',
  /** The 'Thumbnail, entity browser' display mode for 'Media' entities. */
  Viewsimagethumbnail = 'VIEWSIMAGETHUMBNAIL'
}

/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFile = Media & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'MediaFile';
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldBannerImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaImageParagraph: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  fieldMediaFile?: Maybe<FieldMediaFileFieldMediaFile>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldBannerImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldGalleryMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileReverseFieldMediaImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Document (general)' bundle of the 'Media' entity type. */
export type MediaFileEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImage = Media & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'MediaGalleryImage';
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldBannerImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaImageParagraph: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /**
   * <big><b>Accessibility notes:</b></big>
   * <p>If a <i>Title</i> field is entered, it will be displayed as a visible caption. Both <i>Title</i> and <i>Alt</i> will be read by screen readers. For example, given the following fields:</p>
   * <code><p><b>Title:</b> "Cornell University was founded in 1865."<br><b>Alt:</b> "Flowering trees beside the main entrance to Day Hall"</p></code>
   * <p>A screen reader will recite: "Flowering trees beside the main entrance to Day Hall. Caption: Cornell University was founded in 1865."</p>
   */
  fieldMediaImage?: Maybe<FieldMediaGalleryImageFieldMediaImage>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageReverseFieldBannerImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageReverseFieldGalleryMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageReverseFieldMediaImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Gallery image' bundle of the 'Media' entity type. */
export type MediaGalleryImageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImage = Media & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'MediaImage';
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldBannerImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaImageParagraph: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /**
   * Long description for making certain technical/complex images compliant with web accessibility criteria.<br>
   * Visibly hidden, used by screen readers via <code>aria-describedby</code>.<br />
   * <big><strong>If you use this field, you MUST enter alt text for the image.</strong> </big> Otherwise, the image itself will ignored by assistive technology (as "decorative"), and the aria-describedby value will not be provided to users.
   */
  fieldAriaDescription?: Maybe<FieldMediaImageFieldAriaDescription>;
  fieldMediaImage?: Maybe<FieldMediaImageFieldMediaImage>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldBannerImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldGalleryMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageReverseFieldMediaImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Image' bundle of the 'Media' entity type. */
export type MediaImageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideo = Media & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'MediaVideo';
  /** Renders 'Media' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  mid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldMediaLangcode>;
  bundle?: Maybe<FieldMediaBundle>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMediaRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The user ID of the author. */
  uid?: Maybe<FieldMediaUid>;
  name?: Maybe<Scalars['String']>;
  /** The thumbnail of the media item. */
  thumbnail?: Maybe<FieldMediaThumbnail>;
  /** The time the media item was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time the media item was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldMediaPath>;
  /** Query reference:  */
  queryBundle?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldBannerImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryMediaNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldImageNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldMediaImageParagraph: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /**
   * For a single YouTube video, any version of the video URL will work -- normal full URL, short URL, or "share" URL.<br>
   * For a YouTube playlist, use the playlist's "watch" URL -- for example: <code>https://www.youtube.com/watch?v=WYQKPFrJXM0&list=PLyCKQqXvm2LaSG69suTgCLdb2mh6fGLk4</code>
   * For CornellCast, use the normal video URL -- for example: <code>https://www.cornell.edu/video/glorious-to-view</code>
   */
  fieldMediaVideoEmbedField?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityRenderedArgs = {
  mode?: Maybe<MediaDisplayModeId>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryBundleArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldBannerImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldGalleryMediaNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldImageNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoReverseFieldMediaImageParagraphArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Video' bundle of the 'Media' entity type. */
export type MediaVideoEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Menu = {
  __typename?: 'Menu';
  /** The menu's name. */
  name?: Maybe<Scalars['String']>;
  /** The menu's description. */
  description?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<MenuLink>>>;
};

export type MenuLink = {
  __typename?: 'MenuLink';
  label?: Maybe<Scalars['String']>;
  attribute?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expanded?: Maybe<Scalars['Boolean']>;
  links?: Maybe<Array<Maybe<MenuLink>>>;
  url?: Maybe<Url>;
};


export type MenuLinkAttributeArgs = {
  key: Scalars['String'];
};

/** The 'Custom menu link' entity type. */
export type MenuLinkContent = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentEntityRenderedArgs = {
  mode?: Maybe<MenuLinkContentDisplayModeId>;
};


/** The 'Custom menu link' entity type. */
export type MenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Custom menu link' entities. */
export enum MenuLinkContentDisplayModeId {
  /** The 'Token' display mode for 'Custom menu link' entities. */
  Token = 'TOKEN'
}

/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContent = MenuLinkContent & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'MenuLinkContentMenuLinkContent';
  /** Renders 'Custom menu link' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The entity ID for this menu link content entity. */
  id?: Maybe<Scalars['Int']>;
  /** The content menu link UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The menu link language code. */
  langcode?: Maybe<FieldMenuLinkContentLangcode>;
  /** The content menu link bundle. */
  bundle?: Maybe<Scalars['String']>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldMenuLinkContentRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  /** A flag for whether the link should be enabled in menus or hidden. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The text to be used for this link in the menu. */
  title?: Maybe<Scalars['String']>;
  /** Shown when hovering over the menu link. */
  description?: Maybe<Scalars['String']>;
  /** The menu name. All links with the same menu name (such as "tools") are part of the same menu. */
  menuName?: Maybe<Scalars['String']>;
  /** The location this menu link points to. */
  link?: Maybe<FieldMenuLinkContentLink>;
  /** A flag to indicate if the link points to a full URL starting with a protocol, like http:// (1 = external, 0 = internal). */
  external?: Maybe<Scalars['Boolean']>;
  rediscover?: Maybe<Scalars['Boolean']>;
  /** Link weight among links in the same menu at the same depth. In the menu, the links with high weight will sink and links with a low weight will be positioned nearer the top. */
  weight?: Maybe<Scalars['Int']>;
  /** If selected and this menu link has children, the menu will always appear expanded. This option may be overridden for the entire menu tree when placing a menu block. */
  expanded?: Maybe<Scalars['Boolean']>;
  /** The ID of the parent menu link plugin, or empty string when at the top level of the hierarchy. */
  parent?: Maybe<Scalars['String']>;
  /** The time that the menu link was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRenderedArgs = {
  mode?: Maybe<MenuLinkContentDisplayModeId>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Custom menu link' bundle of the 'Custom menu link' entity type. */
export type MenuLinkContentMenuLinkContentEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Content' entity type. */
export type Node = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
};


/** The 'Content' entity type. */
export type NodeEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Content' entity type. */
export type NodeEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Content' entity type. */
export type NodeEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Content' entity type. */
export type NodeEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Content' entity type. */
export type NodeEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Content' entity type. */
export type NodeEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Content' entity type. */
export type NodeQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Content' entity type. */
export type NodeReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Content' entities. */
export enum NodeDisplayModeId {
  /** The 'Revision comparison' display mode for 'Content' entities. */
  Diff = 'DIFF',
  /** The 'Full content' display mode for 'Content' entities. */
  Full = 'FULL',
  /** The 'RSS' display mode for 'Content' entities. */
  Rss = 'RSS',
  /** The 'Search index' display mode for 'Content' entities. */
  Searchindex = 'SEARCHINDEX',
  /** The 'Search result highlighting input' display mode for 'Content' entities. */
  Searchresult = 'SEARCHRESULT',
  /** The 'Teaser' display mode for 'Content' entities. */
  Teaser = 'TEASER',
  /** The 'Token' display mode for 'Content' entities. */
  Token = 'TOKEN'
}

/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEvent = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeEvent';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodeEventBody>;
  fieldAttachments?: Maybe<FieldNodeEventFieldAttachments>;
  fieldDestinationUrl?: Maybe<FieldNodeEventFieldDestinationUrl>;
  fieldEventDate?: Maybe<FieldNodeEventFieldEventDate>;
  fieldEventDateEnd?: Maybe<FieldNodeEventFieldEventDateEnd>;
  fieldEventImage?: Maybe<FieldNodeEventFieldEventImage>;
  fieldEventLocation?: Maybe<Scalars['String']>;
  fieldLocalistId?: Maybe<Scalars['String']>;
  fieldShortDescription?: Maybe<FieldNodeEventFieldShortDescription>;
  fieldTags?: Maybe<Array<Maybe<FieldNodeEventFieldTags>>>;
  /** Query reference:  */
  queryFieldTags?: Maybe<EntityQueryResult>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Event' bundle of the 'Content' entity type. */
export type NodeEventQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGallery = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeGallery';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodeGalleryBody>;
  /**
   * Hint: Video content can be mixed with images in a single gallery, though it's worth considering what the best experience will be for visitors. Perhaps separate image and video galleries would be more intuitive, and allow visitors to choose the content that suits their interests or viewing environment.<br><br>
   * <big><b>Accessibility notes:</b></big>
   * <p>If a <i>Title</i> field is entered, it will be displayed as a visible caption. Both <i>Title</i> and <i>Alt</i> will be read by screen readers. For example, given the following fields:</p>
   * <code><p><b>Title:</b> "Cornell University was founded in 1865."<br><b>Alt:</b> "Flowering trees beside the main entrance to Day Hall"</p></code>
   * <p>A screen reader will recite: "Flowering trees beside the main entrance to Day Hall. Caption: Cornell University was founded in 1865."</p>
   */
  fieldGalleryMedia?: Maybe<Array<Maybe<FieldNodeGalleryFieldGalleryMedia>>>;
  fieldGalleryType?: Maybe<Scalars['Int']>;
  /** Query reference:  */
  queryFieldGalleryMedia?: Maybe<EntityQueryResult>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Gallery' bundle of the 'Content' entity type. */
export type NodeGalleryQueryFieldGalleryMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'News' bundle of the 'Content' entity type. */
export type NodeNews = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeNews';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodeNewsBody>;
  /** Adding a site link or web address to this field will cause listings for this News item to <b>link to another page instead of to the News item itself</b>. If this field is left blank, the listing will simply link to the News item, showing the full Body content entered below. */
  fieldDestinationUrl?: Maybe<FieldNodeNewsFieldDestinationUrl>;
  /**
   * <p>A featured image to represent this content in listings (and on the News item's full page, if one exists). The image provided will be used to generate thumbnails at various sizes.</p>
   * <p><b>Image Recommendations:</b></p>
   * <ul>
   * <li><code>This image should be a minimum of 480x480.</code></li>
   * <li><code>If a full page exists for this News item, the featured image should be a minimum of 832x520.</code></li>
   * <li><code>When editing an image in Drupal, drag the crosshair icon (<big>+</big>) to the most important region of the image, to make it more prominent in cropped thumbnails.</code></li>
   * </ul>
   */
  fieldImage?: Maybe<FieldNodeNewsFieldImage>;
  fieldPostDate?: Maybe<FieldNodeNewsFieldPostDate>;
  fieldTags?: Maybe<Array<Maybe<FieldNodeNewsFieldTags>>>;
  /** A summary of around 300 characters or fewer, commonly present in listings and teasers. This text should usually be a single paragraph and not include HTML markup. However, it can accommodate links and light formatting of text if needed. */
  fieldTeaser?: Maybe<FieldNodeNewsFieldTeaser>;
  /** Query reference:  */
  queryFieldImage?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryFieldTags?: Maybe<EntityQueryResult>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'News' bundle of the 'Content' entity type. */
export type NodeNewsQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePage = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodePage';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodePageBody>;
  fieldAttachedView?: Maybe<Array<Maybe<FieldNodePageFieldAttachedView>>>;
  fieldBannerImage?: Maybe<FieldNodePageFieldBannerImage>;
  /** Include an embedded media gallery at the bottom of the main page content. */
  fieldGallery?: Maybe<FieldNodePageFieldGallery>;
  /** Include an embedded carousel at the bottom of the main page content. On the homepage, it will instead display in the site header. */
  fieldSlider?: Maybe<FieldNodePageFieldSlider>;
  /** Query reference:  */
  queryFieldBannerImage?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryFieldGallery?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryFieldSlider?: Maybe<EntityQueryResult>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryFieldBannerImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryFieldGalleryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Basic page' bundle of the 'Content' entity type. */
export type NodePageQueryFieldSliderArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Person' bundle of the 'Content' entity type. */
export type NodePerson = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodePerson';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /**
   * This field is used for an optional bio, as well as areas of expertise, CBB Projects, etc.<br />
   * <strong>EITHER</strong> use this field OR the <em>External bio link</em>  field.
   */
  body?: Maybe<FieldNodePersonBody>;
  /** <strong>EITHER</strong> use this field OR the <em>Bio text</em> field. */
  fieldDestinationUrl?: Maybe<FieldNodePersonFieldDestinationUrl>;
  fieldEmail?: Maybe<Scalars['String']>;
  /** TO DO: help text */
  fieldImage?: Maybe<FieldNodePersonFieldImage>;
  fieldJobTitle?: Maybe<Scalars['String']>;
  fieldLocation?: Maybe<Scalars['String']>;
  fieldPersonLastname?: Maybe<Scalars['String']>;
  /** TO DO: help text */
  fieldPersonRef?: Maybe<Array<Maybe<FieldNodePersonFieldPersonRef>>>;
  fieldPhone?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryFieldImage?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryFieldPersonRef?: Maybe<EntityQueryResult>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Person' bundle of the 'Content' entity type. */
export type NodePersonQueryFieldPersonRefArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshow = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeSlideshow';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  fieldSlides?: Maybe<Array<Maybe<FieldNodeSlideshowFieldSlides>>>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Slideshow' bundle of the 'Content' entity type. */
export type NodeSlideshowEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlight = Node & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'NodeSpotlight';
  /** Renders 'Content' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  nid?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldNodeLangcode>;
  type?: Maybe<FieldNodeType>;
  /** The time that the current revision was created. */
  revisionTimestamp?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUid?: Maybe<FieldNodeRevisionUid>;
  /** Briefly describe the changes you have made. */
  revisionLog?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** The username of the content author. */
  uid?: Maybe<FieldNodeUid>;
  title?: Maybe<Scalars['String']>;
  /** The time that the node was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the node was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  promote?: Maybe<Scalars['Boolean']>;
  sticky?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldNodePath>;
  /** Computed menu link for the node (only available during node saving). */
  menuLink?: Maybe<FieldNodeMenuLink>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUid?: Maybe<EntityQueryResult>;
  /** Query reference: The username of the content author. */
  queryUid?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldReferencedContentBlockContent: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldGalleryNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldPersonRefNode: EntityQueryResult;
  /** Reverse reference:  */
  reverseFieldSliderNode: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  body?: Maybe<FieldNodeSpotlightBody>;
  /** Adding a site link or web address to this field will cause listings for this Spotlight to <b>link to another page instead of to the Spotlight itself</b>. If this field is left blank, the listing will simply link to the Spotlight, showing the full Body content entered below. */
  fieldDestinationUrl?: Maybe<FieldNodeSpotlightFieldDestinationUrl>;
  /**
   * <p>A featured image to represent this content in listings (and on the Spotlight's full page, if one exists). The image provided will be used to generate thumbnails at various sizes.</p>
   * <p><b>Image Recommendations:</b></p>
   * <ul>
   * <li><code>This image should be a minimum of 480x480.</code></li>
   * <li><code>If a full page exists for this Spotlight, the featured image should be a minimum of 832x520.</code></li>
   * <li><code>When editing an image in Drupal, drag the crosshair icon (<big>+</big>) to the most important region of the image, to make it more prominent in cropped thumbnails.</code></li>
   * </ul>
   */
  fieldImage?: Maybe<FieldNodeSpotlightFieldImage>;
  fieldPostDate?: Maybe<FieldNodeSpotlightFieldPostDate>;
  fieldTags?: Maybe<Array<Maybe<FieldNodeSpotlightFieldTags>>>;
  /** A summary of around 300 characters or fewer, commonly present in listings and teasers. This text should usually be a single paragraph and not include HTML markup. However, it can accommodate links and light formatting of text if needed. */
  fieldTeaser?: Maybe<FieldNodeSpotlightFieldTeaser>;
  /** Query reference:  */
  queryFieldImage?: Maybe<EntityQueryResult>;
  /** Query reference:  */
  queryFieldTags?: Maybe<EntityQueryResult>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityRenderedArgs = {
  mode?: Maybe<NodeDisplayModeId>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightQueryRevisionUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightReverseFieldReferencedContentBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightReverseFieldGalleryNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightReverseFieldPersonRefNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightReverseFieldSliderNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightQueryFieldImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Spotlight' bundle of the 'Content' entity type. */
export type NodeSpotlightQueryFieldTagsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Paragraph' entity type. */
export type Paragraph = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Paragraph' entity type. */
export type ParagraphEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Paragraph' entity type. */
export type ParagraphQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Paragraph' entities. */
export enum ParagraphDisplayModeId {
  /** The 'Preview' display mode for 'Paragraph' entities. */
  Preview = 'PREVIEW'
}

/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlide = Paragraph & Entity & EntityPublishable & EntityOwnable & EntityRevisionable & {
  __typename?: 'ParagraphSlideshowSlide';
  /** Renders 'Paragraph' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The paragraphs entity language code. */
  langcode?: Maybe<FieldParagraphLangcode>;
  type?: Maybe<FieldParagraphType>;
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the Paragraph was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The ID of the parent entity of which this entity is referenced. */
  parentId?: Maybe<Scalars['String']>;
  /** The entity parent type to which this entity is referenced. */
  parentType?: Maybe<Scalars['String']>;
  /** The entity parent field name to which this entity is referenced. */
  parentFieldName?: Maybe<Scalars['String']>;
  /** The behavior plugin settings */
  behaviorSettings?: Maybe<Scalars['String']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  /** Query reference:  */
  queryType?: Maybe<EntityQueryResult>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityOwner?: Maybe<User>;
  entityRevisions: EntityQueryResult;
  /** This text will only be used if both <i>title</i> and <i>caption</i> are empty (and should be considered required in such a case). It will be accessible to screen readers and visible to all users on keyboard focus. */
  fieldImageAltText?: Maybe<Scalars['String']>;
  fieldMediaImage?: Maybe<FieldParagraphSlideshowSlideFieldMediaImage>;
  /** This text is displayed on the slide as a small caption. */
  fieldSlideCaption?: Maybe<Scalars['String']>;
  /** If filled in, the title and/or caption will be a clickable link. <code><b>Hint:</b> Requires a title and/or caption be present. If not, <i>Image alt text</i> should be provided.</code> */
  fieldSlideLink?: Maybe<FieldParagraphSlideshowSlideFieldSlideLink>;
  /** This text is displayed on the slide as a large headline. */
  fieldSlideTitle?: Maybe<Scalars['String']>;
  /** Query reference:  */
  queryFieldMediaImage?: Maybe<EntityQueryResult>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityRenderedArgs = {
  mode?: Maybe<ParagraphDisplayModeId>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideQueryTypeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Slideshow Slide' bundle of the 'Paragraph' entity type. */
export type ParagraphSlideshowSlideQueryFieldMediaImageArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'URL alias' entity type. */
export type PathAlias = Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'PathAlias';
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  langcode?: Maybe<FieldPathAliasLangcode>;
  /** The path that this alias belongs to. */
  path?: Maybe<Scalars['String']>;
  /** An alias used with this path. */
  alias?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'URL alias' entity type. */
export type PathAliasEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'URL alias' entity type. */
export type PathAliasEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  languageInterfaceContext?: Maybe<Language>;
  languageContentContext?: Maybe<Language>;
  nodeContext?: Maybe<Node>;
  currentUserContext?: Maybe<User>;
  /** Loads 'Custom block' entities by their id. */
  blockContentById?: Maybe<BlockContent>;
  /** Loads 'Crop' entities by their id. */
  cropById?: Maybe<Crop>;
  /** Loads 'Fake entity type' entities by their id. */
  entityEmbedFakeEntityById?: Maybe<EntityEmbedFakeEntity>;
  /** Loads 'File' entities by their id. */
  fileById?: Maybe<File>;
  /** Loads 'Media' entities by their id. */
  mediaById?: Maybe<Media>;
  /** Loads 'Content' entities by their id. */
  nodeById?: Maybe<Node>;
  /** Loads 'URL alias' entities by their id. */
  pathAliasById?: Maybe<PathAlias>;
  /** Loads 'Redirect' entities by their id. */
  redirectById?: Maybe<Redirect>;
  /** Loads 'Taxonomy term' entities by their id. */
  taxonomyTermById?: Maybe<TaxonomyTerm>;
  /** Loads 'User' entities by their id. */
  userById?: Maybe<User>;
  /** Loads 'Custom menu link' entities by their id. */
  menuLinkContentById?: Maybe<MenuLinkContent>;
  /** Loads 'Paragraph' entities by their id. */
  paragraphById?: Maybe<Paragraph>;
  /** Loads 'Custom block' entity revision by their revision id. */
  blockContentRevisionById?: Maybe<BlockContent>;
  /** Loads 'Crop' entity revision by their revision id. */
  cropRevisionById?: Maybe<Crop>;
  /** Loads 'Media' entity revision by their revision id. */
  mediaRevisionById?: Maybe<Media>;
  /** Loads 'Content' entity revision by their revision id. */
  nodeRevisionById?: Maybe<Node>;
  /** Loads 'URL alias' entity revision by their revision id. */
  pathAliasRevisionById?: Maybe<PathAlias>;
  /** Loads 'Taxonomy term' entity revision by their revision id. */
  taxonomyTermRevisionById?: Maybe<TaxonomyTerm>;
  /** Loads 'Custom menu link' entity revision by their revision id. */
  menuLinkContentRevisionById?: Maybe<MenuLinkContent>;
  /** Loads 'Paragraph' entity revision by their revision id. */
  paragraphRevisionById?: Maybe<Paragraph>;
  /** Loads 'Custom block' entities. */
  blockContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Crop' entities. */
  cropQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Fake entity type' entities. */
  entityEmbedFakeEntityQuery?: Maybe<EntityQueryResult>;
  /** Loads 'File' entities. */
  fileQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Media' entities. */
  mediaQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Content' entities. */
  nodeQuery?: Maybe<EntityQueryResult>;
  /** Loads 'URL alias' entities. */
  pathAliasQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Redirect' entities. */
  redirectQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Taxonomy term' entities. */
  taxonomyTermQuery?: Maybe<EntityQueryResult>;
  /** Loads 'User' entities. */
  userQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Custom menu link' entities. */
  menuLinkContentQuery?: Maybe<EntityQueryResult>;
  /** Loads 'Paragraph' entities. */
  paragraphQuery?: Maybe<EntityQueryResult>;
  /** Loads a menu by its machine-readable name. */
  menuByName?: Maybe<Menu>;
  /** Loads the list of available languages. */
  availableLanguages?: Maybe<Array<Maybe<Language>>>;
  /** Loads a route by its path. */
  route?: Maybe<Url>;
};


export type QueryBlockContentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCropByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryEntityEmbedFakeEntityByIdArgs = {
  id: Scalars['String'];
};


export type QueryFileByIdArgs = {
  id: Scalars['String'];
};


export type QueryMediaByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasByIdArgs = {
  id: Scalars['String'];
};


export type QueryRedirectByIdArgs = {
  id: Scalars['String'];
};


export type QueryTaxonomyTermByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMenuLinkContentByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryParagraphByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryBlockContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryCropRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMediaRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryNodeRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryPathAliasRevisionByIdArgs = {
  id: Scalars['String'];
};


export type QueryTaxonomyTermRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryMenuLinkContentRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryParagraphRevisionByIdArgs = {
  id: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryBlockContentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryCropQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryEntityEmbedFakeEntityQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryFileQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMediaQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryNodeQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryPathAliasQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryRedirectQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryTaxonomyTermQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryUserQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMenuLinkContentQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryParagraphQueryArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


export type QueryMenuByNameArgs = {
  name: Scalars['String'];
  language?: Maybe<LanguageId>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};

export enum QueryConjunction {
  And = 'AND',
  Or = 'OR'
}

export enum QueryOperator {
  Equal = 'EQUAL',
  NotEqual = 'NOT_EQUAL',
  SmallerThan = 'SMALLER_THAN',
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  In = 'IN',
  NotIn = 'NOT_IN',
  Like = 'LIKE',
  NotLike = 'NOT_LIKE',
  Between = 'BETWEEN',
  NotBetween = 'NOT_BETWEEN',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL'
}

/** The 'Redirect' entity type. */
export type Redirect = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** Query reference: The user ID of the node author. */
  queryUid?: Maybe<EntityQueryResult>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' entity type. */
export type RedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' entity type. */
export type RedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' entity type. */
export type RedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Redirect' entity type. */
export type RedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirect = Redirect & Entity & {
  __typename?: 'RedirectRedirect';
  /** The redirect ID. */
  rid?: Maybe<Scalars['Int']>;
  /** The record UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The redirect hash. */
  hash?: Maybe<Scalars['String']>;
  /** The redirect type. */
  type?: Maybe<Scalars['String']>;
  /** The user ID of the node author. */
  uid?: Maybe<FieldRedirectUid>;
  /** Enter an internal Drupal path or path alias to redirect (e.g. <em class="placeholder">node/123</em> or <em class="placeholder">taxonomy/term/123</em>). Fragment anchors (e.g. <em class="placeholder">#anchor</em>) are <strong>not</strong> allowed. */
  redirectSource?: Maybe<FieldRedirectRedirectSource>;
  redirectRedirect?: Maybe<FieldRedirectRedirectRedirect>;
  /** The redirect language. */
  language?: Maybe<FieldRedirectLanguage>;
  /** The redirect status code. */
  statusCode?: Maybe<Scalars['Int']>;
  /** The date when the redirect was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** Query reference: The user ID of the node author. */
  queryUid?: Maybe<EntityQueryResult>;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectQueryUidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Redirect' bundle of the 'Redirect' entity type. */
export type RedirectRedirectEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};

export type RedirectUrl = Url & {
  __typename?: 'RedirectUrl';
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
  /** The redirect code. */
  code?: Maybe<Scalars['Int']>;
  /** The redirect target. */
  target?: Maybe<Url>;
};


export type RedirectUrlTranslateArgs = {
  language: LanguageId;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** The 'Taxonomy term' entity type. */
export type TaxonomyTerm = {
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent?: Maybe<Array<Maybe<FieldTaxonomyTermParent>>>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldTaxonomyTermPath>;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The parents of this term. */
  queryParent?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Taxonomy term' entity type. */
export type TaxonomyTermReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'Taxonomy term' entities. */
export enum TaxonomyTermDisplayModeId {
  /** The 'Taxonomy term page' display mode for 'Taxonomy term' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'Taxonomy term' entities. */
  Token = 'TOKEN'
}

/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTags = TaxonomyTerm & Entity & EntityPublishable & EntityRevisionable & {
  __typename?: 'TaxonomyTermTags';
  /** Renders 'Taxonomy term' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The term ID. */
  tid?: Maybe<Scalars['Int']>;
  /** The term UUID. */
  uuid?: Maybe<Scalars['String']>;
  revisionId?: Maybe<Scalars['Int']>;
  /** The term language code. */
  langcode?: Maybe<FieldTaxonomyTermLangcode>;
  /** The vocabulary to which the term is assigned. */
  vid?: Maybe<FieldTaxonomyTermVid>;
  /** The time that the current revision was created. */
  revisionCreated?: Maybe<Scalars['Timestamp']>;
  /** The user ID of the author of the current revision. */
  revisionUser?: Maybe<FieldTaxonomyTermRevisionUser>;
  /** Briefly describe the changes you have made. */
  revisionLogMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<FieldTaxonomyTermDescription>;
  /** The weight of this term in relation to other terms. */
  weight?: Maybe<Scalars['Int']>;
  /** The parents of this term. */
  parent?: Maybe<Array<Maybe<FieldTaxonomyTermParent>>>;
  /** The time that the term was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  /** A flag indicating whether this was a default revision when it was saved. */
  revisionDefault?: Maybe<Scalars['Boolean']>;
  /** Indicates if the last edit of a translation belongs to current revision. */
  revisionTranslationAffected?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldTaxonomyTermPath>;
  /** Query reference: The vocabulary to which the term is assigned. */
  queryVid?: Maybe<EntityQueryResult>;
  /** Query reference: The user ID of the author of the current revision. */
  queryRevisionUser?: Maybe<EntityQueryResult>;
  /** Query reference: The parents of this term. */
  queryParent?: Maybe<EntityQueryResult>;
  /** Reverse reference:  */
  reverseFieldTagsNode: EntityQueryResult;
  /** Reverse reference: The parents of this term. */
  reverseParentTaxonomyTerm: EntityQueryResult;
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  entityPublished?: Maybe<Scalars['Boolean']>;
  entityRevisions: EntityQueryResult;
  /** The parents of this term. */
  parentOfTaxonomyTermTags?: Maybe<Array<Maybe<FieldTaxonomyTermTagsParent>>>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRenderedArgs = {
  mode?: Maybe<TaxonomyTermDisplayModeId>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryVidArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryRevisionUserArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsQueryParentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseFieldTagsNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsReverseParentTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'Tags' bundle of the 'Taxonomy term' entity type. */
export type TaxonomyTermTagsEntityRevisionsArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};



/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntity = Entity & {
  __typename?: 'UnexposedEntity';
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityTranslationArgs = {
  language: LanguageId;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityAccessArgs = {
  operation: Scalars['String'];
};


/** Fallback type for otherwise unexposed entities. */
export type UnexposedEntityEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** Common interface for internal and external urls. */
export type Url = {
  /** The translated url object. */
  translate?: Maybe<Url>;
  /** The processed url path. */
  path?: Maybe<Scalars['String']>;
  /** Boolean indicating whether this is a routed (internal) path. */
  routed?: Maybe<Scalars['Boolean']>;
};


/** Common interface for internal and external urls. */
export type UrlTranslateArgs = {
  language: LanguageId;
};

/** The 'User' entity type. */
export type User = Entity & {
  __typename?: 'User';
  entityLanguage?: Maybe<Language>;
  entityLabel?: Maybe<Scalars['String']>;
  entityTranslations?: Maybe<Array<Maybe<Entity>>>;
  entityId?: Maybe<Scalars['String']>;
  entityTranslation?: Maybe<Entity>;
  entityChanged?: Maybe<Scalars['String']>;
  entityType?: Maybe<Scalars['String']>;
  entityUuid?: Maybe<Scalars['String']>;
  entityUrl?: Maybe<Url>;
  entityCreated?: Maybe<Scalars['String']>;
  entityAccess?: Maybe<Scalars['Boolean']>;
  entityBundle?: Maybe<Scalars['String']>;
  entityQueryExclusive: EntityQueryResult;
  /** Renders 'User' entities in the given view mode. */
  entityRendered?: Maybe<Scalars['String']>;
  /** The user ID. */
  uid?: Maybe<Scalars['Int']>;
  /** The user UUID. */
  uuid?: Maybe<Scalars['String']>;
  /** The user language code. */
  langcode?: Maybe<FieldUserLangcode>;
  /** The user's preferred language code for receiving emails and viewing the site. */
  preferredLangcode?: Maybe<FieldUserPreferredLangcode>;
  /** The user's preferred language code for viewing administration pages. */
  preferredAdminLangcode?: Maybe<FieldUserPreferredAdminLangcode>;
  /** The name of this user. */
  name?: Maybe<Scalars['String']>;
  /** The password of this user (hashed). */
  pass?: Maybe<FieldUserPass>;
  /** The email of this user. */
  mail?: Maybe<Scalars['String']>;
  /** The timezone of this user. */
  timezone?: Maybe<Scalars['String']>;
  /** Whether the user is active or blocked. */
  status?: Maybe<Scalars['Boolean']>;
  /** The time that the user was created. */
  created?: Maybe<Scalars['Timestamp']>;
  /** The time that the user was last edited. */
  changed?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last accessed the site. */
  access?: Maybe<Scalars['Timestamp']>;
  /** The time that the user last logged in. */
  login?: Maybe<Scalars['Timestamp']>;
  /** The email address used for initial account creation. */
  init?: Maybe<Scalars['String']>;
  /** The roles the user has. */
  roles?: Maybe<Array<Maybe<FieldUserRoles>>>;
  /** A flag indicating whether this is the default translation. */
  defaultLangcode?: Maybe<Scalars['Boolean']>;
  path?: Maybe<FieldUserPath>;
  /** Your virtual face or picture. */
  userPicture?: Maybe<FieldUserUserPicture>;
  /** Query reference: The roles the user has. */
  queryRoles?: Maybe<EntityQueryResult>;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserBlockContent: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidCrop: EntityQueryResult;
  /** Reverse reference: The user ID of the file. */
  reverseUidFile: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author. */
  reverseUidMedia: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUidNode: EntityQueryResult;
  /** Reverse reference: The username of the content author. */
  reverseUidNode: EntityQueryResult;
  /** Reverse reference: The user ID of the node author. */
  reverseUidRedirect: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserTaxonomyTerm: EntityQueryResult;
  /** Reverse reference: The user ID of the author of the current revision. */
  reverseRevisionUserMenuLinkContent: EntityQueryResult;
};


/** The 'User' entity type. */
export type UserEntityTranslationArgs = {
  language: LanguageId;
};


/** The 'User' entity type. */
export type UserEntityChangedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityCreatedArgs = {
  format?: Maybe<Scalars['String']>;
};


/** The 'User' entity type. */
export type UserEntityAccessArgs = {
  operation: Scalars['String'];
};


/** The 'User' entity type. */
export type UserEntityQueryExclusiveArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
  bundles?: Maybe<EntityQueryBundleMode>;
};


/** The 'User' entity type. */
export type UserEntityRenderedArgs = {
  mode?: Maybe<UserDisplayModeId>;
};


/** The 'User' entity type. */
export type UserQueryRolesArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserBlockContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidCropArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidFileArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidMediaArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidNodeArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseUidRedirectArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserTaxonomyTermArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};


/** The 'User' entity type. */
export type UserReverseRevisionUserMenuLinkContentArgs = {
  filter?: Maybe<EntityQueryFilterInput>;
  sort?: Maybe<Array<Maybe<EntityQuerySortInput>>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  revisions?: Maybe<EntityQueryRevisionMode>;
};

/** The available display modes for 'User' entities. */
export enum UserDisplayModeId {
  /** The 'Compact' display mode for 'User' entities. */
  Compact = 'COMPACT',
  /** The 'User account' display mode for 'User' entities. */
  Full = 'FULL',
  /** The 'Token' display mode for 'User' entities. */
  Token = 'TOKEN'
}

export type GetEventsByDateQueryQueryVariables = Exact<{
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
}>;


export type GetEventsByDateQueryQuery = (
  { __typename?: 'Query' }
  & { nodeQuery?: Maybe<(
    { __typename?: 'EntityQueryResult' }
    & { entities?: Maybe<Array<Maybe<{ __typename?: 'BlockContentBasic' } | { __typename?: 'BlockContentReferenceBlock' } | { __typename?: 'CropFocalPoint' } | { __typename?: 'EntityEmbedFakeEntity' } | { __typename?: 'File' } | { __typename?: 'MediaFile' } | { __typename?: 'MediaGalleryImage' } | { __typename?: 'MediaImage' } | { __typename?: 'MediaVideo' } | { __typename?: 'MenuLinkContentMenuLinkContent' } | (
      { __typename?: 'NodeEvent' }
      & Pick<NodeEvent, 'title' | 'fieldEventLocation' | 'fieldLocalistId'>
      & { fieldEventDate?: Maybe<(
        { __typename?: 'FieldNodeEventFieldEventDate' }
        & Pick<FieldNodeEventFieldEventDate, 'value'>
      )>, fieldEventDateEnd?: Maybe<(
        { __typename?: 'FieldNodeEventFieldEventDateEnd' }
        & Pick<FieldNodeEventFieldEventDateEnd, 'value'>
      )>, fieldEventImage?: Maybe<(
        { __typename?: 'FieldNodeEventFieldEventImage' }
        & Pick<FieldNodeEventFieldEventImage, 'url'>
      )>, fieldDestinationUrl?: Maybe<(
        { __typename?: 'FieldNodeEventFieldDestinationUrl' }
        & { url?: Maybe<(
          { __typename?: 'DefaultInternalUrl' }
          & Pick<DefaultInternalUrl, 'path' | 'routed'>
        ) | (
          { __typename?: 'EntityCanonicalUrl' }
          & Pick<EntityCanonicalUrl, 'path' | 'routed'>
        ) | (
          { __typename?: 'ExternalUrl' }
          & Pick<ExternalUrl, 'path' | 'routed'>
        ) | (
          { __typename?: 'RedirectUrl' }
          & Pick<RedirectUrl, 'path' | 'routed'>
        )> }
      )>, fieldShortDescription?: Maybe<(
        { __typename?: 'FieldNodeEventFieldShortDescription' }
        & Pick<FieldNodeEventFieldShortDescription, 'value'>
      )>, fieldTags?: Maybe<Array<Maybe<(
        { __typename?: 'FieldNodeEventFieldTags' }
        & Pick<FieldNodeEventFieldTags, 'targetId'>
      )>>> }
    ) | { __typename?: 'NodeGallery' } | { __typename?: 'NodeNews' } | { __typename?: 'NodePage' } | { __typename?: 'NodePerson' } | { __typename?: 'NodeSlideshow' } | { __typename?: 'NodeSpotlight' } | { __typename?: 'ParagraphSlideshowSlide' } | { __typename?: 'PathAlias' } | { __typename?: 'RedirectRedirect' } | { __typename?: 'TaxonomyTermTags' } | { __typename?: 'UnexposedEntity' } | { __typename?: 'User' }>>> }
  )> }
);
