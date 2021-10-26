import hanlp
import time

from hanlp.components.mtl.multi_task_learning import MultiTaskLearning
from hanlp.components.mtl.tasks.tok.tag_tok import TaggingTokenization

# 会在当前用户的home目录创建 .hanlp 目录并将内容下载和解压其中，如：~/.hanlp
# > ll ~/.hanlp
# total 0
# drwxr-xr-x  3 axu  staff  96 10 21 17:19 mtl
# drwxr-xr-x  3 axu  staff  96 10 21 17:20 thirdparty
# drwxr-xr-x  3 axu  staff  96 10 21 17:20 transformers
HanLP: MultiTaskLearning = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_SRL_DEP_SDP_CON_ELECTRA_SMALL_ZH)
tok: TaggingTokenization = HanLP['tok/fine']

tok.dict_combine = {'量力度德'} # 自定义此词库

start = time.time()
sentences = [
    '这个挺好的但是我不喜欢', 
    '我一看不行就溜之大吉了', 
    '我不太量力度德的完成了我应该完成的工作', 
    '不太好吃，相当难吃，要是米饭再多点儿就好了'
]
print(HanLP(sentences, tasks=['dep', 'sdp']))
print(time.time() - start)
