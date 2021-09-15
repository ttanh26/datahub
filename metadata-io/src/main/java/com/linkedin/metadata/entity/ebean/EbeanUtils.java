package com.linkedin.metadata.entity.ebean;

import com.linkedin.common.urn.Urn;
import com.linkedin.data.schema.RecordDataSchema;
import com.linkedin.data.template.RecordTemplate;
import com.linkedin.metadata.utils.PegasusUtils;
import com.linkedin.metadata.dao.utils.RecordUtils;
import com.linkedin.metadata.models.AspectSpec;
import com.linkedin.metadata.models.EntitySpec;
import com.linkedin.metadata.models.registry.EntityRegistry;
import com.linkedin.mxe.SystemMetadata;
import javax.annotation.Nonnull;

import static com.linkedin.metadata.utils.PegasusUtils.getDataTemplateClassFromSchema;
import static com.linkedin.metadata.entity.EntityService.*;


public class EbeanUtils {
  private EbeanUtils() {
  }

  @Nonnull
  public static String toJsonAspect(@Nonnull final RecordTemplate aspectRecord) {
    return RecordUtils.toJsonString(aspectRecord);
  }

  @Nonnull
  public static RecordTemplate toAspectRecord(@Nonnull final Urn entityUrn, @Nonnull final String aspectName,
      @Nonnull final String jsonAspect, @Nonnull final EntityRegistry entityRegistry) {
    return toAspectRecord(PegasusUtils.urnToEntityName(entityUrn), aspectName, jsonAspect, entityRegistry);
  }
  public static RecordTemplate toAspectRecord(@Nonnull final String entityName, @Nonnull final String aspectName,
      @Nonnull final String jsonAspect, @Nonnull final EntityRegistry entityRegistry) {
    final EntitySpec entitySpec = entityRegistry.getEntitySpec(entityName);
    final AspectSpec aspectSpec = entitySpec.getAspectSpec(aspectName);
    final RecordDataSchema aspectSchema = aspectSpec.getPegasusSchema();
    return RecordUtils.toRecordTemplate(getDataTemplateClassFromSchema(aspectSchema, RecordTemplate.class), jsonAspect);
  }

  public static SystemMetadata parseSystemMetadata(String jsonSystemMetadata) {
    if (jsonSystemMetadata == null || jsonSystemMetadata.equals("")) {
      SystemMetadata response = new SystemMetadata();
      response.setRunId(DEFAULT_RUN_ID);
      response.setLastObserved(0);
      return response;
    }
    return RecordUtils.toRecordTemplate(SystemMetadata.class, jsonSystemMetadata);
  }
}