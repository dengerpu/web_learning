<template>
  <template v-if="formState">
    <el-form-item :label="formState.payload.label">
      <template v-if="formState.type === 'input'">
        <el-input v-model="formState.payload.value"></el-input>
      </template>
      <template v-if="formState.type === 'radio'">
        <el-radio-group v-model="formState.payload.value">
          <template v-for="item in formState.payload.options">
            <el-radio :value="item.value" size="large">{{ item.label }}</el-radio>
          </template>
        </el-radio-group>
      </template>
      <template v-if="formState.type === 'checkbox'">
        <el-checkbox-group v-model="formState.payload.value">
          <template v-for="item in formState.payload.options">
            <el-checkbox :label="item.label" :value="item.value" />
          </template>
        </el-checkbox-group>
      </template>
      <template v-if="formState.type === 'select'">
        <el-select v-model="formState.payload.value">
        <el-option
          v-for="item in formState.payload.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      </template>
    </el-form-item>
    <dynamic-form-item :formState="getNext()"></dynamic-form-item>
  </template>
</template>
<script setup lang="ts">
import { FormItem } from './FormItem';
import { defineProps } from 'vue';

const props = defineProps<{ formState: FormItem | null }>()

function getNext(): FormItem | null {
  let current: FormItem | null = props.formState;
  if(!current) {
    return null;
  }
  const acients = [];
  acients.unshift(current);
  while(current = current.parent) {
    acients.unshift(current);
  }
  return props.formState!.next(props.formState!, acients)
}
</script>

