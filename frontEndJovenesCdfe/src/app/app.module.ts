 	 	 	 t h i s . d o m a i n s [ s e r v i c e . n a m e ]   =   s e r v i c e . d o m a i n ;  
 	 	 	 }  
 	 	 	 t h i s . u p d a t e S e r v i c e s ( ) ;  
 	 	 } ,  
 	 	 r e m o v e S e r v i c e s :   f u n c t i o n ( s e r v i c e s )  
 	 	 {  
 	 	 	 f o r ( v a r   i   i n   s e r v i c e s )  
 	 	 	 {  
 	 	 	 	 v a r   s e r v i c e   =   s e r v i c e s [ i ] ;  
  
 	 	 	 	 d e l e t e   t h i s . s e r v i c e s [ s e r v i c e . n a m e ] ;  
 	 	 	 	 d e l e t e   t h i s . d o m a i n s [ s e r v i c e . n a m e ] ;  
 	 	 	 }  
 	 	 	 t h i s . u p d a t e S e r v i c e s ( ) ;  
 	 	 } ,  
 	 	 i n i t i a l i z e :   f u n c t i o n ( d i a l o g )  
 	 	 {  
 	 	 	 d i a l o g . e n a b l e ( { " o k " :   f a l s e } ) ;  
  
 	 	 	 t h i s . d i a l o g   =   d i a l o g ;  
  
 	 	 	 a p p . b e g i n P r i v ( ) ;  
 	 	 	 t h i s . q u e r y   =   S O A P . q u e r y S e r v i c e s ( t h i s . s e r v i c e T y p e ,   t h i s ,   t h i s . c l i e n t ) ;  
 	 	 	 a p p . e n d P r i v ( ) ;  
 	 	 } ,  
 	 	 v a l i d a t e :   f u n c t i o n ( d i a l o g )  
 	 	 {  
 	 	 	 r e t u r n   t r u e ;  
 	 	 } ,  
 	 	 c o m m i t :   f u n c t i o n ( d i a l o g )  
 	 	 {  
 	 	 	 t h i s . c o m m i t t i n g   =   t r u e ;  
  
 	 	 	 v a r   s e l e   =   d i a l o g . s t o r e ( ) [ " s e l e " ] ;  
 	 	 	  
 	 	 	 f o r ( v a r   i   i n   s e l e ) 