Vim�UnDo� ӡ��c$�o�"�tr�y{�锻�����C1�YN                                      `ȱ�    _�                        \    ����                                                                                                                                                                                                                                                                                                                                                             `Ȱ�     �                 �             �               ]export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {}5��       \                  �                      �                          �                      �                          �                      �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `Ȱ�     �               !  return db.collection('folders')5��       !                  �                      �       "                 �                     �       "                 �                     �       "                 �                     �       "                 �                     �       "              
   �              
       �       "       
          �       
              �       -                 �                     �       -                 �                     �       2                 �                     �       2              
   �              
       5�_�                       <    ����                                                                                                                                                                                                                                                                                                                                                             `ȱ     �               >  return db.collection('folders').insertOne({_id: nanoid(12)})5��       <                  �                      �       A                 �                     �       A                 �                     �       A                 �                     �       A                 �                     �       A                 �                     �       I                 �                     �       I                 �                     �       I                 �                     �       I                 �                     �       I                 �                     �       I                 �                     �       T              
   �              
       5�_�                       ^    ����                                                                                                                                                                                                                                                                                                                                                             `ȱ*     �               `  return db.collection('folders').insertOne({_id: nanoid(12), ...folder, createdAt: new Date()})5��       ^                  �                      �       _                 �                     �       _                 �                     �       _                 �                     5�_�                       o    ����                                                                                                                                                                                                                                                                                                                                                             `ȱ1     �               o  return db.collection('folders').insertOne({_id: nanoid(12), ...folder, createdAt: new Date().toDateString()})5��       o                  
                     �       w                                     5�_�                       |    ����                                                                                                                                                                                                                                                                                                                                                             `ȱC    �               }  return db.collection('folders').insertOne({_id: nanoid(12), ...folder, createdAt: new Date().toDateString()}).then(({ops}))5��       |               
                 
       5�_�                       �    ����                                                                                                                                                                                                                                                                                                                                                             `ȱY    �                 �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �                 import { Db } from 'mongodb'   import { nanoid } from 'nanoid'       \export const createFolder = async (db: Db, folder: { createdBy: string; name: string }) => {   �  return db.collection('folders').insertOne({_id: nanoid(12), ...folder, createdAt: new Date().toDateString()}).then(({ops}) => ops[0])   }       >export const getFolders = async (db: Db, userId: string) => {}�               �  return db.collection('folders').insertOne({_id: nanoid(12), ...folder, createdAt: new Date().toDateString()}).then(({ops}) => ops[0])5��       �                                       �       �                                       �                          x      f              5�_�      	                 =    ����                                                                                                                                                                                                                                                                                                                                                             `ȱo     �                 �             �   
              >export const getFolders = async (db: Db, userId: string) => {}5��    
   =                  v                     �    
   =                  v                     �    
   =                  v                     �                          w                     �                          w                     �                        y                    �                        y                    �                        y                    �                        y                    5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             `ȱ�     �                  �               �                  �               5��                          �                     �                          �                     �                         �              �       5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        `ȱ�     �   
             =export const getFolders = async (db: Db, userId: string) => {     return   }5��    
                      9      I               5�_�   
                          ����                                                                                                                                                                                                                                                                                                                                                  V        `ȱ�    �   
              5��    
                      9                     5��