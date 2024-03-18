import { isReactive, reactive } from "vue";

export type FormItemType = 'input' | 'select'  | 'checkbox' | 'radio'

export interface FormItem {
  type: FormItemType // 表单项的类型
  payload: any // 表单项的值，当前文本框的值，下拉列表的选项等等
  next: (current: FormItem, acients: FormItem[]) => FormItem | null // current 当前表单项   acients 当前表单项的祖先表单项
  parent: FormItem | null // 当前表单的上一项
}

export function createFormItem(
  formItemType: FormItem['type'], 
  payload : FormItem['payload'], 
  next?: FormItem['next'],parent?: 
  FormItem['parent']
  ): FormItem {
  if(!next) {
    next = () => null
  }
  if(!parent) {
    parent = null
  }
  const nextFunc: FormItem['next'] = (current, acients) => {
    let nextItem = next!(current, acients)
    if(!nextItem) {
      return null;
    }
    nextItem.parent = current;
    if(!isReactive(nextItem)) {
      nextItem = reactive(nextItem)
    }
    return nextItem;
  }
  const formItem: FormItem = reactive({
    type: formItemType,
    payload,
    next: nextFunc,
    parent
  })
  return formItem
}