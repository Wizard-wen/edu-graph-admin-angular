/**
 * @author wizard.song
 * @date 2020/09/19 17:29
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { KnowledgeType, KnowledgeBaseType } from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
  }

  getKnowledgeList(): Promise<{
    data: KnowledgeType[];
    code: number;
  }> {
    return this.http.get<{
      data: KnowledgeType[];
      code: number;
    }>('api/knowledge/getKnowledgeList').toPromise();
  }

  getKnowledgePageList(requestBody: { page: number, pageSize: number }): Promise<{
    data: {
      pageList: KnowledgeType[],
      total: number
    },
    code: number;
  }> {
    return this.http.post<{
      data: {
        pageList: KnowledgeType[],
        total: number
      },
      code: number
    }>('api/knowledge/getKnowledgePageList', requestBody).toPromise();
  }

  removeKnowledgeById(requestBody: { id: string }): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/removeKnowledgeById', requestBody).toPromise();
  }

  getKnowledgeById(requestBody: { id: string }): Promise<{
    code: number;
    data: {
      knowledge: {
        id: string;
        name: string;
        knowledgeBaseTypeId: string;
      },
      edgeList: {
        id: string;
        originKnowledge: string;
        targetKnowledge: string;
        Knowledge: string;
      }[]
    }
  }> {
    return this.http.post<{
      code: number;
      data: any;
    }>('api/knowledge/getKnowledgeById', requestBody).toPromise();
  }

  createKnowledge(requestBody: KnowledgeType): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/createKnowledge', requestBody).toPromise();
  }

  updateKnowledge(requestBody: KnowledgeType): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/updateKnowledge', requestBody).toPromise();
  }

  getKnowledgeBaseTypeList(): Promise<{
    data: KnowledgeBaseType[];
    code: number;
  }> {
    return this.http.get<{
      data: KnowledgeBaseType[];
      code: number;
    }>('api/knowledge/getKnowledgeBaseTypeList').toPromise();
  }

  getKnowledgeBaseTypePageList(requestBody: { page: number, pageSize: number }): Promise<{
    data: {
      pageList: KnowledgeBaseType[],
      total: number
    },
    code: number;
  }> {
    return this.http.post<{
      data: {
        pageList: KnowledgeBaseType[],
        total: number
      },
      code: number
    }>('api/knowledge/getKnowledgeBaseTypePageList', requestBody).toPromise();
  }

  removeKnowledgeBaseTypeById(requestBody: { id: string }): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/removeKnowledgeBaseTypeById', requestBody).toPromise();
  }

  createKnowledgeBaseType(requestBody: KnowledgeBaseType): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/createKnowledgeBaseType', requestBody).toPromise();
  }

  updateKnowledgeBaseType(requestBody: KnowledgeBaseType): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/updateKnowledgeBaseType', requestBody).toPromise();
  }


  createGraphEdge(requestBody: { type: string; relationKnowledge: string; knowledgeId: string }): Promise<{
    code: number;
  }> {
    return this.http.post<{
      code: number;
    }>('api/knowledge/createGraphEdge', requestBody).toPromise();
  }
}
