/**
 * @author wizard.song
 * @date 2020/09/23 22:24
 */

export type KnowledgeType = {
  name: string;
  knowledgeBaseTypeId: string;
  id?: string;
  preKnowledgeIdList?: string[];
  extendKnowledgeIdList?: string[];
  sectionId?: string;
  domainId?: string;
};

export type KnowledgeBaseType = {
  name: string;
  key: string;
  id?: string;
};
